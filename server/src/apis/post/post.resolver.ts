import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthenticateGuard } from 'src/guards/authenticate.guard';
import { CreatePostInput } from './dto/create-post.dto';
import { UpdatePostInput } from './dto/update-post.dto';
import { Post, PostPaginated } from './entities/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
@UseGuards(AuthenticateGuard)
export class PostResolver {
	constructor(private readonly postService: PostService) {}

	@Query(() => PostPaginated)
	getAllPost() {
		return this.postService.findAll();
	}

	@Query(() => Post, { nullable: true })
	getOnePost(@Args('id') id: string) {
		return this.postService.findOne(id);
	}

	@Mutation(() => Post)
	createPost(@Args('data') data: CreatePostInput, @Context() ctx: Ctx) {
		const userId = ctx.req.user.sub;
		return this.postService.create({ ...data, userId });
	}

	@Mutation(() => Post)
	updatePost(@Args('id') id: string, @Args('data') data: UpdatePostInput) {
		return this.postService.update(id, data);
	}

	@Mutation(() => Post)
	deletePost(@Args('id') id: string) {
		return this.postService.remove(id);
	}
}

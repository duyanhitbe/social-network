import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { AuthenticateGuard } from 'src/guards/authenticate.guard';
import { Like } from '../like/entities/like.entity';
import { LikeService } from '../like/like.service';
import { CreatePostInput } from './dto/create-post.dto';
import { UpdatePostInput } from './dto/update-post.dto';
import { Post, PostPaginated } from './entities/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
@UseGuards(AuthenticateGuard)
export class PostResolver {
	constructor(
		private readonly postService: PostService,
		private readonly likeService: LikeService,
	) {}

	@ResolveField(() => Boolean)
	async isLiked(@Root() root: Post, @Context() ctx: Ctx) {
		const userId = ctx.req.user.sub;
		const count = await this.likeService.countByPostId(root.id, userId);
		return count > 0;
	}

	@ResolveField(() => [Like])
	likes(@Root() root: Post) {
		return this.likeService.findByPostId(root.id);
	}

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

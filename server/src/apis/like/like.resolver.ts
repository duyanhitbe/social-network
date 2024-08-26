import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthenticateGuard } from 'src/guards/authenticate.guard';
import { PostService } from '../post/post.service';
import { CreateLikeInput } from './dto/create-like.input';
import { UpdateLikeInput } from './dto/update-like.input';
import { Like, LikePaginated } from './entities/like.entity';
import { LikeService } from './like.service';

@Resolver(() => Like)
@UseGuards(AuthenticateGuard)
export class LikeResolver {
	constructor(
		private readonly likeService: LikeService,
		private readonly postService: PostService,
	) {}

	@Mutation(() => Like)
	async like(@Args('data') data: CreateLikeInput, @Context() ctx: Ctx) {
		const userId = ctx.req.user.sub;
		const existing = await this.likeService.findOneByPostId(data.postId, userId);
		if (existing) {
			const result = { ...existing };
			existing.remove();
			this.postService.decreaseLike(data.postId);
			return result;
		}
		this.postService.increaseLike(data.postId);
		return this.likeService.create({ ...data, userId });
	}

	@Query(() => LikePaginated, { name: 'like' })
	getAllLike() {
		return this.likeService.findAll();
	}

	@Query(() => Like, { name: 'like' })
	getOneLike(@Args('id') id: string) {
		return this.likeService.findOne(id);
	}

	@Mutation(() => Like)
	updateLike(@Args('id') id: string, @Args('data') data: UpdateLikeInput) {
		return this.likeService.update(id, data);
	}

	@Mutation(() => Like)
	deleteLike(@Args('id') id: string) {
		return this.likeService.remove(id);
	}
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService extends BaseService<Post> {
	constructor(@InjectRepository(Post) private readonly postRepo: Repository<Post>) {
		super(postRepo);
	}

	increaseLike(id: string) {
		return this.postRepo.increment({ id }, 'likeCount', 1);
	}

	decreaseLike(id: string) {
		return this.postRepo.decrement({ id }, 'likeCount', 1);
	}

	increaseComment(id: string) {
		return this.postRepo.increment({ id }, 'commentCount', 1);
	}

	decreaseComment(id: string) {
		return this.postRepo.decrement({ id }, 'commentCount', 1);
	}

	increaseShare(id: string) {
		return this.postRepo.increment({ id }, 'shareCount', 1);
	}

	decreaseShare(id: string) {
		return this.postRepo.decrement({ id }, 'shareCount', 1);
	}
}

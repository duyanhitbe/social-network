import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';

@Injectable()
export class LikeService extends BaseService<Like> {
	constructor(@InjectRepository(Like) private readonly likeRepo: Repository<Like>) {
		super(likeRepo);
	}

	findOneByPostId(postId: string, userId: string) {
		return this.likeRepo.findOne({
			where: {
				postId,
				userId,
			},
		});
	}

	findByPostId(postId: string) {
		return this.likeRepo.find({
			where: {
				postId,
			},
		});
	}

	countByPostId(postId: string, userId: string) {
		return this.likeRepo.count({ where: { postId, userId } });
	}
}

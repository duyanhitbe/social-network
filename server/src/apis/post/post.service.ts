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
}

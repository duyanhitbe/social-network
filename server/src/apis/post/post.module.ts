import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeModule } from '../like/like.module';
import { Post } from './entities/post.entity';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
	imports: [TypeOrmModule.forFeature([Post]), forwardRef(() => LikeModule)],
	providers: [PostResolver, PostService],
	exports: [PostService],
})
export class PostModule {}

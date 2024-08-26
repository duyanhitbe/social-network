import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
	imports: [TypeOrmModule.forFeature([Post])],
	controllers: [PostController],
	providers: [PostService, PostResolver],
	exports: [PostService],
})
export class PostModule {}

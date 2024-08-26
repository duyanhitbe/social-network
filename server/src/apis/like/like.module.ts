import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from '../post/post.module';
import { Like } from './entities/like.entity';
import { LikeResolver } from './like.resolver';
import { LikeService } from './like.service';

@Module({
	imports: [TypeOrmModule.forFeature([Like]), forwardRef(() => PostModule)],
	providers: [LikeResolver, LikeService],
	exports: [LikeService],
})
export class LikeModule {}

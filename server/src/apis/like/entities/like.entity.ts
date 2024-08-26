import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/apis/post/entities/post.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { PaginatedData } from 'src/base/base.dto';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@ObjectType()
@Entity({ name: 'likes' })
export class Like extends BaseEntity {
	@Column()
	@Field(() => String)
	userId!: string;

	@Column()
	@Field(() => String)
	postId!: string;

	@ManyToOne(() => User)
	@Field(() => User, { nullable: true })
	user?: User;

	@ManyToOne(() => Post)
	post?: Post;
}

@ObjectType()
export class LikePaginated extends PaginatedData(Like) {}

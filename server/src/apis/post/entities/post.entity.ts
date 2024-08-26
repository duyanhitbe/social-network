import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/user/entities/user.entity';
import { PaginatedData } from 'src/base/base.dto';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'posts' })
@ObjectType()
export class Post extends BaseEntity {
	@Column()
	@Field(() => String)
	body!: string;

	@Column({ nullable: true })
	@Field(() => String, { nullable: true })
	image?: string;

	@Column({ default: 0 })
	@Field(() => Int)
	likeCount!: number;

	@Column({ default: 0 })
	@Field(() => Int)
	commentCount!: number;

	@Column({ default: 0 })
	@Field(() => Int)
	shareCount!: number;

	@Column()
	@Field(() => String)
	userId!: string;

	@ManyToOne(() => User, { eager: true })
	@JoinColumn({ name: 'userId' })
	@Field(() => User, { nullable: true })
	user?: User;
}

@ObjectType()
export class PostPaginated extends PaginatedData(Post) {}

import { Field, ObjectType } from '@nestjs/graphql';
import { hash } from 'argon2';
import { Exclude } from 'class-transformer';
import { PaginatedData } from 'src/base/base.dto';
import { BaseEntity } from 'src/base/base.entity';
import { BeforeInsert, Column, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User extends BaseEntity {
	@Column()
	@Field(() => String)
	name!: string;

	@Column()
	@Field(() => String)
	username!: string;

	@Column({ nullable: true })
	@Field(() => String, { nullable: true })
	avatar?: string;

	@Column()
	@Exclude()
	password!: string;

	@Column()
	@Field(() => String)
	email!: string;

	@BeforeInsert()
	async beforeInsert() {
		this.password = await hash(this.password);
	}
}

@ObjectType()
export class UserPaginated extends PaginatedData(User) {}

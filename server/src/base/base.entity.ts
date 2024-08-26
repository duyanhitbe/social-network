import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity as TypeormBaseEntity,
	UpdateDateColumn,
} from 'typeorm';

@ObjectType({ isAbstract: true })
export class BaseEntity extends TypeormBaseEntity {
	@PrimaryGeneratedColumn('uuid')
	@Field(() => ID)
	id!: string;

	@CreateDateColumn()
	@Field(() => Date)
	createdAt!: Date;

	@UpdateDateColumn()
	@Field(() => Date)
	updatedAt!: Date;
}

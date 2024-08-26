import { Field, ObjectType } from '@nestjs/graphql';
import { RoomMember } from 'src/apis/room-member/entities/room-member.entity';
import { PaginatedData } from 'src/base/base.dto';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { RoomType } from '../room.enum';

@Entity({ name: 'rooms' })
@ObjectType()
export class Room extends BaseEntity {
	@Column({ nullable: true })
	@Field(() => String, { nullable: true })
	name?: string;

	@Column({ nullable: true })
	@Field(() => String, { nullable: true })
	avatar?: string;

	@Column({ nullable: true })
	@Field(() => String, { nullable: true })
	lastMessage?: string;

	@Column({ nullable: true })
	@Field(() => Date, { nullable: true })
	timestamp?: Date;

	@Column({ default: RoomType.PRIVATE })
	@Field(() => RoomType)
	type!: RoomType;

	@OneToMany(() => RoomMember, (member) => member.room, { eager: true })
	@Field(() => [RoomMember], { nullable: true })
	members?: RoomMember[];
}

@ObjectType()
export class RoomPaginated extends PaginatedData(Room) {}

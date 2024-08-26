import { Field, ObjectType } from '@nestjs/graphql';
import { Room } from 'src/apis/room/entities/room.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { PaginatedData } from 'src/base/base.dto';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'messages' })
@ObjectType()
export class Message extends BaseEntity {
	@Column()
	@Field(() => String)
	text!: string;

	@Column()
	@Field(() => String)
	userId!: string;

	@Column()
	@Field(() => String)
	roomId!: string;

	@ManyToOne(() => User, { eager: true })
	@JoinColumn({ name: 'userId' })
	@Field(() => User, { nullable: true })
	user?: User;

	@ManyToOne(() => Room)
	@JoinColumn({ name: 'roomId' })
	room?: Room;
}

@ObjectType()
export class MessagePaginated extends PaginatedData(Message) {}

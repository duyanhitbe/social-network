import { Field, ObjectType } from '@nestjs/graphql';
import { Room } from 'src/apis/room/entities/room.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'room_members' })
@ObjectType()
export class RoomMember extends BaseEntity {
	@Column()
	@Field(() => String)
	roomId!: string;

	@Column()
	@Field(() => String)
	userId!: string;

	@ManyToOne(() => Room, (room) => room.members)
	@JoinColumn({ name: 'roomId' })
	room?: Room;

	@ManyToOne(() => User, { eager: true })
	@JoinColumn({ name: 'userId' })
	@Field(() => User, { nullable: true })
	user?: User;
}

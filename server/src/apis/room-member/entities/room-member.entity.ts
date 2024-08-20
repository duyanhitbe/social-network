import { Room } from 'src/apis/room/entities/room.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'room_members' })
export class RoomMember extends BaseEntity {
  @Column()
  roomId!: string;

  @Column()
  userId!: string;

  @ManyToOne(() => Room, (room) => room.members)
  @JoinColumn({ name: 'roomId' })
  room?: Room;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'userId' })
  user?: User;
}

import { Room } from 'src/apis/room/entities/room.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'messages' })
export class Message extends BaseEntity {
  @Column()
  text!: string;

  @Column()
  userId!: string;

  @Column()
  roomId!: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'userId' })
  user?: User;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'roomId' })
  room?: Room;
}

import { RoomMember } from 'src/apis/room-member/entities/room-member.entity';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { RoomType } from '../room.enum';

@Entity({ name: 'rooms' })
export class Room extends BaseEntity {
  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  lastMessage?: string;

  @Column({ nullable: true })
  timestamp?: Date;

  @Column({ default: RoomType.PRIVATE })
  type!: RoomType;

  @OneToMany(() => RoomMember, (member) => member.room, { eager: true })
  members?: RoomMember[];
}

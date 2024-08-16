import { User } from 'src/apis/user/entities/user.entity';
import { BaseEntity } from 'src/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'posts' })
export class Post extends BaseEntity {
  @Column()
  body!: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ default: 0 })
  likeCount!: number;

  @Column({ default: 0 })
  commentCount!: number;

  @Column({ default: 0 })
  shareCount!: number;

  @Column()
  userId!: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'userId' })
  user?: User;
}

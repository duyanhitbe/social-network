import { hash } from 'argon2';
import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/base/base.entity';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column()
  @Exclude()
  password!: string;

  @Column()
  email!: string;

  @BeforeInsert()
  async beforeInsert() {
    this.password = await hash(this.password);
  }
}

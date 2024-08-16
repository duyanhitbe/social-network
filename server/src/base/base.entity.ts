import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity as TypeormBaseEntity,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity extends TypeormBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

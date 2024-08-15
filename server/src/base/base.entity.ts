import {
  PrimaryGeneratedColumn,
  BaseEntity as TypeormBaseEntity,
} from 'typeorm';

export class BaseEntity extends TypeormBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
}

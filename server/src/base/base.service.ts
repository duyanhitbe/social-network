import { DeepPartial, Repository } from 'typeorm';
import { QueryPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseEntity } from './base.entity';

export class BaseService<T extends BaseEntity> {
  constructor(private readonly repo: Repository<T>) {}

  create(data: DeepPartial<T>) {
    return this.repo.create(data).save();
  }

  async findAll(query?: GetAllQuery<T>) {
    const { limit: take = 10, page = 1, where } = query || {};
    const order = { createdAt: 'DESC' } as any;
    const skip = take * (page - 1);
    const [data, count] = await this.repo.findAndCount({
      take,
      skip,
      where,
      order,
    });
    return {
      data,
      pagination: {
        limit: take,
        page,
        total: count,
      },
    };
  }

  findOne(id: string) {
    const where = { id } as any;
    return this.repo.findOne({ where });
  }

  async update(id: string, data: QueryPartialEntity<T>) {
    const entity = await this.findOne(id);
    if (!entity) {
      return null;
    }
    Object.assign(entity, data);
    return entity.save();
  }

  async remove(id: string) {
    const entity = await this.findOne(id);
    if (!entity) {
      return null;
    }
    return entity.remove();
  }
}

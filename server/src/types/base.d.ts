import { FindOptionsWhere } from 'typeorm';

declare global {
  type GetAllQuery<T> = {
    limit?: number;
    page?: number;
    where?: FindOptionsWhere<T> | FindOptionsWhere<T>[];
  };
}

export {};

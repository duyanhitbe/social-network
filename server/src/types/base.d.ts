import { FindOptionsOrder, FindOptionsWhere } from 'typeorm';

declare global {
	type GetAllQuery<T> = {
		limit?: number;
		page?: number;
		where?: FindOptionsWhere<T> | FindOptionsWhere<T>[];
		order?: FindOptionsOrder<T>;
	};
}

export {};

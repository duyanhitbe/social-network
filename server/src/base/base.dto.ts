import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export function PaginatedData<T extends Type<unknown>>(classRef: T): any {
	@ObjectType({ isAbstract: true })
	abstract class Result {
		@Field(() => [classRef])
		data!: [T];

		@Field(() => Pagination, { nullable: true })
		pagination?: Pagination;
	}
	return Result;
}

@ObjectType()
class Pagination {
	@Field(() => Int, { defaultValue: 0 })
	limit!: number;

	@Field(() => Int, { defaultValue: 0 })
	page!: number;

	@Field(() => Int, { defaultValue: 0 })
	total!: number;
}

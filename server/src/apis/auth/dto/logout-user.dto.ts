import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LogoutUser {
	@Field(() => String)
	message!: string;
}

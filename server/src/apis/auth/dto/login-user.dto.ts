import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
	@IsString()
	@IsNotEmpty()
	username!: string;

	@IsString()
	@IsNotEmpty()
	password!: string;
}

@InputType()
export class LoginUserInput {
	@Field(() => String)
	username!: string;

	@Field(() => String)
	password!: string;
}

@ObjectType()
export class LoginUser {
	@Field(() => String)
	accessToken!: string;
}

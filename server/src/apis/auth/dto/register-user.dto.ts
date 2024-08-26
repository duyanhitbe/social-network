import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/apis/user/entities/user.entity';

export class RegisterUserDto {
	@IsString()
	@IsNotEmpty()
	username!: string;

	@IsString()
	@IsNotEmpty()
	password!: string;

	@IsString()
	@IsNotEmpty()
	email!: string;
}

@InputType()
export class RegisterUserInput {
	@Field(() => String)
	username!: string;

	@Field(() => String)
	password!: string;

	@Field(() => String)
	email!: string;

	@Field(() => String)
	name!: string;
}

@ObjectType()
export class RegisterUser {
	@Field(() => User)
	user!: User;
}

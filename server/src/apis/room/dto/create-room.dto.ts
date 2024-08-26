import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoomDto {
	@IsString()
	@IsNotEmpty()
	userId!: string;
}

@InputType()
export class CreateRoomInput {
	@Field(() => String)
	userId!: string;
}

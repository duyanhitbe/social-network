import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreatePostDto {
	@IsString()
	@IsNotEmpty()
	body!: string;

	@IsOptional()
	@IsString()
	@IsUrl()
	image?: string;
}

@InputType()
export class CreatePostInput {
	@Field(() => String)
	body!: string;

	@Field(() => String, { nullable: true })
	image?: string;
}

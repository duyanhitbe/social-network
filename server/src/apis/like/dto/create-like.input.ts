import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLikeInput {
	@Field(() => String)
	postId!: string;
}

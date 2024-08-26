import { InputType, PartialType } from '@nestjs/graphql';
import { CreatePostInput } from './create-post.dto';

export class UpdatePostDto {}

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {}

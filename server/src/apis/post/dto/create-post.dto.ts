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

import { InputType, PartialType } from '@nestjs/graphql';
import { CreateRoomInput } from './create-room.dto';

export class UpdateRoomDto {}

@InputType()
export class UpdateRoomInput extends PartialType(CreateRoomInput) {}

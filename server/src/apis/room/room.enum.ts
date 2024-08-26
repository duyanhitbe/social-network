import { registerEnumType } from '@nestjs/graphql';

export enum RoomType {
	PRIVATE = 'PRIVATE',
	GROUP = 'GROUP',
}

registerEnumType(RoomType, {
	name: 'RoomType',
});

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { map, Observable } from 'rxjs';
import { Room } from 'src/apis/room/entities/room.entity';

@Injectable()
export class RoomInterceptor implements NestInterceptor {
	constructor(private reflector: Reflector) {}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const method = this.reflector.getAllAndOverride<string>('METHOD', [
			context.getHandler(),
			context.getClass(),
		]);
		const request = context.switchToHttp().getRequest<Request>();
		const userId = request['user']?.sub;

		return next.handle().pipe(
			map((data) => {
				if (!userId) return data;

				if (method === 'FIND_ALL') {
					const roomData = { ...data } as {
						data: Room[];
						pagination: {
							limit: number;
							page: number;
							total: number;
						};
					};

					for (let i = 0; i < roomData.data.length; i++) {
						const room = roomData.data[i];
						const member = room?.members?.find((member) => member.userId !== userId);
						if (member) {
							roomData.data[i].name = member.user?.name;
							roomData.data[i].avatar = member.user?.avatar;
						}
					}

					return roomData;
				}

				if (method === 'FIND_ONE') {
					const room = { ...data } as Room | null;

					if (!room) return null;

					const member = room?.members?.find((member) => member.userId !== userId);
					if (member) {
						room.name = member.user?.name;
						room.avatar = member.user?.avatar;
					}

					return room;
				}

				return data;
			}),
		);
	}
}

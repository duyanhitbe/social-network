import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { Message } from 'src/apis/message/entities/message.entity';

@Injectable()
export class MessageInterceptor implements NestInterceptor {
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
					const messageData = { ...data } as {
						data: Message[];
						pagination: {
							limit: number;
							page: number;
							total: number;
						};
					};

					for (let i = 0; i < messageData.data.length; i++) {
						messageData.data[i]['isOwnMessage'] = messageData.data[i].userId === userId;
					}

					return messageData;
				}

				if (method === 'FIND_ONE') {
					const message = { ...data } as Message | null;

					if (!message) return null;

					message['isOwnMessage'] = message.userId === userId;

					return message;
				}

				return data;
			}),
		);
	}
}

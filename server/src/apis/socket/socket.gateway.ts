import { Logger } from '@nestjs/common';
import {
	OnGatewayConnection,
	OnGatewayDisconnect,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
	WsException,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { AuthService } from 'src/apis/auth/auth.service';
import { Message } from 'src/apis/message/entities/message.entity';
import { MessageService } from 'src/apis/message/message.service';
import { RoomMemberService } from 'src/apis/room-member/room-member.service';
import { RoomService } from 'src/apis/room/room.service';
import { SocketService } from 'src/apis/socket/socket.service';
import { UserService } from 'src/apis/user/user.service';
import { getTokenFromHeaders } from 'src/helpers/request.helper';
import { EventKey } from './socket.constant';

@WebSocketGateway({
	cors: { origin: '*', credentials: true },
	namespace: 'chat',
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
	private readonly logger = new Logger(SocketGateway.name);

	@WebSocketServer()
	server!: Socket;

	constructor(
		private readonly authService: AuthService,
		private readonly userService: UserService,
		private readonly roomService: RoomService,
		private readonly roomMemberService: RoomMemberService,
		private readonly messageService: MessageService,
		private readonly socketService: SocketService,
	) {}

	async getUserId(client: Socket): Promise<string> {
		const headers = client.handshake.headers;
		const token = getTokenFromHeaders(headers);

		try {
			const payload = await this.authService.verifyToken(token);
			return payload.sub;
		} catch (error) {
			throw new WsException('Invalid authentication');
		}
	}

	async handleConnection(client: Socket) {
		const clientId = client.id;
		this.logger.debug(`client_id ${clientId} has been connected`);
		const userId = await this.getUserId(client);
		this.socketService.create({ userId, clientId: clientId });
	}

	handleDisconnect(client: Socket) {
		const clientId = client.id;
		this.logger.debug(`client_id ${clientId} has been disconnected`);
		this.socketService.removeByClientId(clientId);
	}

	@SubscribeMessage(EventKey.SEND_MESSAGE)
	async handleEvent(client: Socket, data: Message) {
		const userId = await this.getUserId(client);
		data.userId = userId;

		const newMessageKey = EventKey.NEW_MESSAGE + '/' + data.roomId;
		const roomMembers = await this.roomMemberService.findByRoomId(data.roomId);
		const userIds: string[] = [];

		roomMembers.forEach((mem) => {
			if (mem.user) {
				userIds.push(mem.user.id);
			}
		});
		const sockets = await this.socketService.findByUserIds(userIds);
		const clientSocketIds = sockets.map(({ clientId }) => clientId);

		const newMessage = await this.messageService.create(data);
		const user = await this.userService.findOne(userId);
		newMessage.user = user || undefined;
		this.roomService.update(data.roomId, {
			lastMessage: data.text,
			timestamp: new Date(),
		});
		this.server.to(clientSocketIds).emit(EventKey.FETCH_ROOM);
		this.server.to(clientSocketIds).emit(newMessageKey, newMessage);
	}
}

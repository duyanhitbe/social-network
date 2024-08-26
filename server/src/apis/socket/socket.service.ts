import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { In, Repository } from 'typeorm';
import { Socket } from './entities/socket.entity';

@Injectable()
export class SocketService extends BaseService<Socket> {
	constructor(@InjectRepository(Socket) private readonly socketRepo: Repository<Socket>) {
		super(socketRepo);
	}

	removeByClientId(clientId: string) {
		return this.socketRepo.delete({ clientId });
	}

	findByUserIds(userIds: string[]) {
		return this.socketRepo.find({ where: { userId: In(userIds) } });
	}
}

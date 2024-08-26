import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService extends BaseService<Room> {
	constructor(@InjectRepository(Room) private readonly roomRepo: Repository<Room>) {
		super(roomRepo);
	}
}

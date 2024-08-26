import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	SetMetadata,
	UseInterceptors,
} from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { UseUserGuard } from 'src/decorators/use-user-guard.decorator';
import { RoomInterceptor } from 'src/interceptors/room.interceptor';
import { In } from 'typeorm';
import { RoomMemberService } from '../room-member/room-member.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomService } from './room.service';

@Controller('room')
@UseUserGuard()
export class RoomController {
	constructor(
		private readonly roomService: RoomService,
		private readonly roomMemberService: RoomMemberService,
	) {}

	@Post()
	async create(@Body() createRoomDto: CreateRoomDto, @CurrentUser() user: any) {
		const { userId } = createRoomDto;

		if (userId === user.sub) {
			throw new BadRequestException('Invalid userId');
		}

		const room = await this.roomService.create({});
		const roomId = room.id;
		Promise.all([
			this.roomMemberService.create({ roomId, userId }),
			this.roomMemberService.create({ roomId, userId: user.sub }),
		]);
		return room;
	}

	@Get()
	@UseInterceptors(RoomInterceptor)
	@SetMetadata('METHOD', 'FIND_ALL')
	async findAll(@CurrentUser() user: any) {
		const userId = user.sub;

		const roomMembers = await this.roomMemberService.findByUserId(userId);
		const roomIds = roomMembers.map((mem) => mem.roomId);

		return this.roomService.findAll({
			where: {
				id: In(roomIds),
			},
			order: {
				timestamp: 'DESC',
			},
		});
	}

	@Get(':id')
	@UseInterceptors(RoomInterceptor)
	@SetMetadata('METHOD', 'FIND_ONE')
	findOne(@Param('id') id: string) {
		return this.roomService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() _updateRoomDto: UpdateRoomDto) {
		return this.roomService.update(id, {});
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.roomService.remove(id);
	}
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMemberModule } from '../room-member/room-member.module';
import { Room } from './entities/room.entity';
import { RoomController } from './room.controller';
import { RoomResolver } from './room.resolver';
import { RoomService } from './room.service';

@Module({
	imports: [TypeOrmModule.forFeature([Room]), RoomMemberModule],
	controllers: [RoomController],
	providers: [RoomService, RoomResolver],
	exports: [RoomService],
})
export class RoomModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMemberModule } from '../room-member/room-member.module';
import { Room } from './entities/room.entity';
import { RoomResolver } from './room.resolver';
import { RoomService } from './room.service';

@Module({
	imports: [TypeOrmModule.forFeature([Room]), RoomMemberModule],
	providers: [RoomResolver, RoomService],
	exports: [RoomService],
})
export class RoomModule {}

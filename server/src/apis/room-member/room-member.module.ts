import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMember } from './entities/room-member.entity';
import { RoomMemberService } from './room-member.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoomMember])],
  controllers: [],
  providers: [RoomMemberService],
  exports: [RoomMemberService],
})
export class RoomMemberModule {}

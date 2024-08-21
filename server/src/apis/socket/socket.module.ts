import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from '../message/message.module';
import { RoomMemberModule } from '../room-member/room-member.module';
import { RoomModule } from '../room/room.module';
import { UserModule } from '../user/user.module';
import { Socket } from './entities/socket.entity';
import { SocketGateway } from './socket.gateway';
import { SocketService } from './socket.service';

@Module({
  imports: [
    UserModule,
    RoomModule,
    RoomMemberModule,
    MessageModule,
    TypeOrmModule.forFeature([Socket]),
  ],
  providers: [SocketService, SocketGateway],
  exports: [SocketService],
})
export class SocketModule {}

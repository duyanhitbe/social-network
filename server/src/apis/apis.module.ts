import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { RoomModule } from './room/room.module';
import { RoomMemberModule } from './room-member/room-member.module';
import { MessageModule } from './message/message.module';
import { SocketModule } from './socket/socket.module';

@Module({
    imports: [AuthModule, UserModule, PostModule, RoomModule, RoomMemberModule, MessageModule, SocketModule]
})
export class ApisModule {}

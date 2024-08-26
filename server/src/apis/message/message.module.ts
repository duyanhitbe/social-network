import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { MessageController } from './message.controller';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';

@Module({
	imports: [TypeOrmModule.forFeature([Message])],
	controllers: [MessageController],
	providers: [MessageService, MessageResolver],
	exports: [MessageService],
})
export class MessageModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';

@Module({
	imports: [TypeOrmModule.forFeature([Message])],
	providers: [MessageResolver, MessageService],
	exports: [MessageService],
})
export class MessageModule {}

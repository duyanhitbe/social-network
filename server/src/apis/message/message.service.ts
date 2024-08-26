import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService extends BaseService<Message> {
	constructor(
		@InjectRepository(Message)
		private readonly messageRepo: Repository<Message>,
	) {
		super(messageRepo);
	}
}

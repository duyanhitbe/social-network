import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService extends BaseService<User> {
	constructor(
		@InjectRepository(User)
		private readonly userRepo: Repository<User>,
		@InjectDataSource()
		private readonly datasource: DataSource,
	) {
		super(userRepo);
	}

	findOneByUsername(username: string) {
		return this.userRepo.findOneBy({ username });
	}
}

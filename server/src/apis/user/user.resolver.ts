import { UseGuards } from '@nestjs/common';
import { Context, Query, Resolver } from '@nestjs/graphql';
import { AuthenticateGuard } from 'src/guards/authenticate.guard';
import { User, UserPaginated } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
@UseGuards(AuthenticateGuard)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => UserPaginated)
	getAllUser() {
		return this.userService.findAll();
	}

	@Query(() => User)
	userGetMe(@Context() ctx: Ctx) {
		const userId = ctx.req.user.sub;
		return this.userService.findOne(userId);
	}
}

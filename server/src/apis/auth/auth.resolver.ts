import { ConflictException, ForbiddenException } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { verify } from 'argon2';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginUser, LoginUserInput } from './dto/login-user.dto';
import { LogoutUser } from './dto/logout-user.dto';
import { RegisterUser, RegisterUserInput } from './dto/register-user.dto';

@Resolver()
export class AuthResolver {
	constructor(
		private readonly authService: AuthService,
		private readonly userService: UserService,
	) {}

	@Mutation(() => LoginUser)
	async loginUser(@Args('data') data: LoginUserInput, @Context() ctx: Ctx) {
		const user = await this.userService.findOneByUsername(data.username);
		if (!user) {
			throw new ForbiddenException('User not found');
		}
		const matchPassword = await verify(user.password, data.password);
		if (!matchPassword) {
			throw new ForbiddenException('Wrong password');
		}

		const sub = user.id;
		const accessToken = await this.authService.generateToken(sub);
		ctx.res.cookie('sub', sub, {
			httpOnly: true,
			secure: true,
			sameSite: 'lax',
		});
		ctx.res.cookie('access_token', accessToken, {
			httpOnly: true,
			secure: true,
			sameSite: 'lax',
		});
		return { accessToken };
	}

	@Mutation(() => RegisterUser)
	async registerUser(@Args('data') data: RegisterUserInput) {
		const existing = await this.userService.findOneByUsername(data.username);
		if (existing) {
			throw new ConflictException('Username already exist');
		}
		const user = await this.userService.create(data);
		return { user };
	}

	@Mutation(() => LogoutUser)
	async logoutUser(@Context() ctx: Ctx) {
		ctx.res.clearCookie('sub');
		ctx.res.clearCookie('access_token');

		return { message: 'Logout successfully' };
	}
}

import {
	CanActivate,
	ContextType,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { AuthService } from 'src/apis/auth/auth.service';
import { getTokenFromHeaders } from 'src/helpers/request.helper';

@Injectable()
export class AuthenticateGuard implements CanActivate {
	constructor(private readonly authService: AuthService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = this.getRequest(context);
		const headers = request.headers;
		const token = getTokenFromHeaders(headers);

		try {
			const payload = await this.authService.verifyToken(token);
			request['user'] = payload;
		} catch (error) {
			throw new UnauthorizedException(error);
		}

		return true;
	}

	private getRequest(context: ExecutionContext): Request {
		const type = context.getType() as ContextType & 'graphql';

		if (type === 'graphql') {
			const ctx = GqlExecutionContext.create(context);
			return ctx.getContext<Ctx>().req;
		}

		return context.switchToHttp().getRequest<Request>();
	}
}

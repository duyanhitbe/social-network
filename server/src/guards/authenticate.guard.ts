import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/apis/auth/auth.service';
import { getTokenFromHeaders } from 'src/helpers/request.helper';

@Injectable()
export class AuthenticateGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
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
}

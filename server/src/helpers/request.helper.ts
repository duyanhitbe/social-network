import { UnauthorizedException } from '@nestjs/common';
import { IncomingHttpHeaders } from 'http';

export function getTokenFromHeaders(headers: IncomingHttpHeaders) {
  const authorization = headers.authorization;
  if (!authorization) {
    throw new UnauthorizedException('missing authorization');
  }
  const [type, token] = authorization.split(' ');
  if (type !== 'Bearer') {
    throw new UnauthorizedException('invalid authorization');
  }
  if (!token) {
    throw new UnauthorizedException('missing authorization');
  }
  return token;
}

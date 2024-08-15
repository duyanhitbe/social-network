import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private secret = 'supersecret';

  constructor(private readonly jwtService: JwtService) {}

  get options() {
    return { secret: this.secret };
  }

  generateToken(sub: string) {
    const payload = { sub };
    return this.jwtService.signAsync(payload, this.options);
  }

  verifyToken(token: string) {
    return this.jwtService.verifyAsync(token, this.options);
  }
}

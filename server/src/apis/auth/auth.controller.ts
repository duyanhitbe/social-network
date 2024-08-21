import {
  Body,
  ConflictException,
  Controller,
  ForbiddenException,
  Post,
  Res,
} from '@nestjs/common';
import { verify } from 'argon2';
import { Response } from 'express';
import { UseUserGuard } from 'src/decorators/use-user-guard.decorator';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() data: RegisterUserDto) {
    const existing = await this.userService.findOneByUsername(data.username);
    if (existing) {
      throw new ConflictException('Username already exist');
    }
    return this.userService.create(data);
  }

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() data: LoginUserDto,
  ) {
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
    response.cookie('sub', sub, {
      httpOnly: true,
      secure: false,
    });
    response.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: false,
    });
    return { accessToken };
  }

  @Post('logout')
  @UseUserGuard()
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('sub');
    response.clearCookie('access_token');

    return { message: 'Logout successfully' };
  }
}

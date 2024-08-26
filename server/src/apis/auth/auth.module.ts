import { Global, Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Global()
@Module({
	imports: [UserModule],
	controllers: [AuthController],
	providers: [AuthService, AuthResolver],
	exports: [AuthService],
})
export class AuthModule {}

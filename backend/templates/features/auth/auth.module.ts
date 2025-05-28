import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
// <!-- AUTH_IMPORTS -->

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    // <!-- AUTH_MODULES -->
    UsersModule,
  ],
  providers: [
    AuthService,
    // <!-- AUTH_PROVIDERS -->
  ],
  controllers: [
    AuthController,
    // <!-- AUTH_CONTROLLERS -->
  ],
})
export class AuthModule { }

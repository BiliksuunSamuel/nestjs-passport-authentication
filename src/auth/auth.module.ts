import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalAuthStrategy } from './local.strategy';
import { JwtAuthStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { FacebookAuthStrategy } from './facebook.strategy';
import { GoogleAuthStrategy } from './google.strategy';

@Module({
  providers: [
    AuthService,
    LocalAuthStrategy,
    JwtAuthStrategy,
    FacebookAuthStrategy,
    GoogleAuthStrategy,
  ],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'bhills',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}

import { FacebookAuthGuard } from './facebook.guard';
import { Controller, Post, UseGuards, Request, Get, Req } from '@nestjs/common';
import { get } from 'http';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';
import { LocalGuard } from './local.guard';
import { GoogleAuthGuard } from './google.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalGuard)
  @Post('login')
  userLogin(@Request() req): Promise<any> {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(FacebookAuthGuard)
  @Get('facebook')
  facebook(@Req() req) {}

  @UseGuards(FacebookAuthGuard)
  @Get('facebook/callback')
  facebookRedirect(@Req() req) {
    return this.authService.facebookLogin(req);
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google')
  google(@Req() req) {
    return req.user;
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  googleRedirect(@Req() req) {
    return this.authService.googleLogin(req);
  }
}

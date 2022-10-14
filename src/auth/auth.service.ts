import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);
    if (user && user.password === password) {
      const { username, password, ...otherInfo } = user;
      return otherInfo;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async facebookLogin(req: any): Promise<any> {
    if (req?.user) {
      return req.user;
    } else {
      throw new UnauthorizedException();
    }
  }
  async googleLogin(req: any): Promise<any> {
    if (req?.user) {
      return req.user;
    } else {
      throw new UnauthorizedException();
    }
  }
}

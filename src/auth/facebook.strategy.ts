import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyFunction } from 'passport-facebook';

@Injectable()
export class FacebookAuthStrategy extends PassportStrategy(
  Strategy,
  'facebook',
) {
  constructor() {
    super({
      clientID: 'FACEBOOK_APP_ID',
      clientSecret: 'FACEBOOK_APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    return done(null, user, null);
  }
}

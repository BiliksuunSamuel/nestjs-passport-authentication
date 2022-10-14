import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      consumerKey:
        '697305154020-nhfm2qf0nfv1mf8tu4vluekic84eccft.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
      clientID:
        '697305154020-nhfm2qf0nfv1mf8tu4vluekic84eccft.apps.googleusercontent.com',
      consumerSecret: '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',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}

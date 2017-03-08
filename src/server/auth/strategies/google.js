// TODO: Add tests

import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

import authConfig from '../credentials.json';
import init from '../init';
import { upsert } from '../../lib/util';

function passportInit() {
  // serialize user into the session
  init();

  passport.use(new GoogleStrategy(
    authConfig.google,
    (accessToken, refreshToken, profile, done) => {
      const params = {
        email: profile.emails[0].value,
        external_auth_type: 'google',
      };
      const data = {
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        email: profile.emails.length && profile.emails[0].value,
        photo_url: profile.photos.length && profile.photos[0].value,
        external_auth_type: 'google',
        external_auth_id: profile.id,
      };

      upsert('/users', params, data)
        .then(resp => done(null, resp))
        .catch(err => done(err));
    },
  ));
}

passportInit();

export default passport;

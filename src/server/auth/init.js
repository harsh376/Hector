// TODO: Add tests

import passport from 'passport';

export default function init() {
  passport.serializeUser((user, done) => {
    const sessionUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      photo_url: user.photo_url,
    };
    done(null, sessionUser);
  });

  passport.deserializeUser((sessionUser, done) =>
    done(null, sessionUser),
  );
}

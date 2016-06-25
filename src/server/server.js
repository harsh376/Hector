/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import webpackConfig from '../../webpack.config.dev';
import ajaxProxyRouter from './lib/ajaxProxyRouter';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import authConfig from './auth/credentials';
import { upsert } from './lib/util';

delete process.env.BROWSER;

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const server = express();

// TODO: write tests for server.js

/**
 ******************************************
 passport stuff - TODO: Move into separate file
 ******************************************
 */
passport.serializeUser((user, done) => {
  const sessionUser = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    photo_url: user.photo_url,
  };
  done(null, sessionUser);
});

passport.deserializeUser((sessionUser, done) => done(null, sessionUser));

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
  }
));

/**
 ******************************************
 * helper functions
 ******************************************
 */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  }
  res.redirect('/');
}

/**
 ******************************************
 * middlewares
 ******************************************
 */

// TODO: Move log format into server config file
// Log requests to stdout
server.use(
  morgan(':remote-addr - - :date[clf] :method :url HTTP/:http-version :status -')
);

server.use(cookieParser());

// TODO: move session config into server config file
server.use(session({
  secret: 'some',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 2419200000 },
}));

server.use(passport.initialize());

server.use(passport.session());

/**
 ******************************************
 * user auth endpoints
 ******************************************
 */


server.get('/auth/google',
  passport.authenticate('google', { scope: ['openid email profile'] })
);

server.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

server.get('/account', ensureAuthenticated, (req, res) => {
  res.send(req.user);
});

server.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

/**
 ******************************************
 * api/ping endpoints
 ******************************************
 */

server.use('/api', ajaxProxyRouter());
server.get('/ping', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send(new Date().toISOString());
});

/**
 ******************************************
 * serving front-end application
 ******************************************
 */

if (isDeveloping) {
  console.log('DEVELOPMENT');
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    // https://webpack.github.io/docs/webpack-dev-middleware.html
    noInfo: true,
    // for hot-reloading with docker
    watchOptions: {
      poll: true,
    },
    stats: {
      colors: true,
    },
  });

  server.use(middleware);
  server.use(webpackHotMiddleware(compiler));

  // serve static assets normally
  server.use(express.static(path.join(__dirname, '../app')));

  // handle every other route with index.html, which will
  // contain a script tag to your application's JavaScript
  // file(s).
  server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/index.html'));
  });
} else {
  console.log('PRODUCTION');
  server.use(express.static(path.join(__dirname, '../app')));
}

server.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Listening at http://0.0.0.0:%s/', port);
});

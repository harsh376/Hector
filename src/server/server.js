/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import config from '../../webpack.config.dev';
import ajaxProxyRouter from './lib/ajaxProxyRouter';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import authConfig from './auth/credentials';

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
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => done(null, id));

passport.use(new GoogleStrategy(
  authConfig.google,
  (accessToken, refreshToken, profile, done) => done(null, profile)
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
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
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
  server.use(express.static(path.join(__dirname, '../app')));
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

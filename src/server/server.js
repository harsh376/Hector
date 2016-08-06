/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

import createRedisClient from './lib/redisClient';
import webpackConfig from '../../webpack.config.dev';
import ajaxProxyRouter from './lib/ajaxProxyRouter';
import passportGoogle from './auth/strategies/google';

delete process.env.BROWSER;

const RedisStore = require('connect-redis')(session);
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const server = express();
// TODO: move session options into server config file
const sessionOptions = {
  secret: 'some',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 2419200000 },
};

// TODO: write tests for server.js

/**
 ******************************************
 * custom middlewares
 ******************************************
 */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
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
if (isDeveloping) {
  server.use(session(sessionOptions));
} else {
  const options = Object.assign(sessionOptions, {
    store: new RedisStore({
      client: createRedisClient(),
    }),
  });
  server.use(session(options));
}

server.use(passport.initialize());
server.use(passport.session());

/**
 ******************************************
 * user auth endpoints
 ******************************************
 */
server.get('/auth/google',
  passportGoogle.authenticate('google', { scope: ['openid email profile'] })
);

server.get('/auth/google/callback',
  passportGoogle.authenticate('google', { failureRedirect: '/' }),
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

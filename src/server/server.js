/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import config from '../../webpack.config.dev';
import ajaxProxyRouter from './lib/ajaxProxyRouter';

delete process.env.BROWSER;

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const server = express();

server.use('/api', ajaxProxyRouter());
server.get('/ping', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send(new Date().toISOString());
});

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
  server.use('/', (req, res) => {
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

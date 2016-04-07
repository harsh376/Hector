/* eslint no-console: ["error", { allow: ["log", "error"] }] */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../../webpack.config.dev');

delete process.env.BROWSER;

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
  console.log('DEVELOPMENT');
  const compiler = webpack(config);
  const middleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
  });

  app.use(middleware);
  app.use(require('webpack-hot-middleware')(compiler));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
} else {
  console.log('PRODUCTION');
  app.use(express.static(path.join(__dirname, '../../dist')));
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Listening at http://0.0.0.0:%s/', port);
});

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : process.env.PORT;
var app = express();

if (isDeveloping) {
    console.log('DEVELOPMENT');
    var compiler = webpack(config);
    var middleware = require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true
    });

    app.use(middleware);
    app.use(require('webpack-hot-middleware')(compiler));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, './dist/index.html'));
    });
} else {
    console.log('PRODUCTION');
    app.use(express.static(path.join(__dirname, 'dist')));
}

app.listen(port, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
    }
    console.info('Listening at http://0.0.0.0:%s/', port);
});

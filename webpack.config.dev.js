var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/app/index.js',
    './src/app/index.html'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'SERVER_ADDR': JSON.stringify(process.env.SERVER_ADDR),

        // http://stackoverflow.com/questions/30347722/importing-css-files-in-isomorphic-react-components
        'BROWSER': JSON.stringify(true)
      }
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src/app')
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        // http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
        include: path.join(__dirname, 'src/app/stylesheets')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  }
};

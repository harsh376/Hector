var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/app/index.js',
    './src/app/index.html'
  ],
  output: {
    path: path.join(__dirname, 'dist/app'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
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
        loaders: ['babel'],
        include: path.join(__dirname, 'src/app')
      }, {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
        include: path.join(__dirname, 'src/app/stylesheets')
      }
    ]
  }
};

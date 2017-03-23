/* eslint no-param-reassign: ["error", { "props": false }] */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, '../src/app');
const destPath = path.join(__dirname, '../dist/app');

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.html$/,
    exclude: /node_modules/,
    use: {
      loader: 'file-loader',
      query: {
        name: '[name].[ext]',
      },
    },
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader!sass-loader',
    }),
  },
  {
    test: /\.json$/,
    use: 'json-loader',
  },
  {
    test: /\.(png|gif|jpg|svg|pdf)$/,
    use: 'url-loader?limit=20480&name=public/[name]-[hash].[ext]',
  },
  {
    test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=10000&mimetype=application/font-woff',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    use: 'file-loader',
  },
];


module.exports = {
  devtool: 'source-map',
  context: sourcePath,
  entry: {
    main: './index.js',
    vendor: ['react'],
  },
  output: {
    path: destPath,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      sourcePath,
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        USER_AUTH: JSON.stringify(process.env.USER_AUTH),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'Harsh Verma',
      template: 'template.ejs',
      appMountId: 'root',
      files: {
        css: {
          style: 'style.css',
        },
        chunks: {
          main: {
            entry: `${destPath}/main.bundle.js`,
          },
          vendor: {
            entry: `${destPath}/vendor.bundle.js`,
          },
        },
      },
    }),
  ],
};

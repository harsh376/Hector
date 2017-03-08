const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './src/app');
const destPath = path.join(__dirname, './dist/app');


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
  devtool: 'eval',
  context: sourcePath,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './index.js',
    './index.html',
  ],
  output: {
    path: destPath,
    filename: 'bundle.js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath,
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        USER_AUTH: JSON.stringify(process.env.USER_AUTH),
        // http://stackoverflow.com/questions/30347722/importing-css-files-in-isomorphic-react-components
        BROWSER: JSON.stringify(true),
      },
    }),
  ],
};

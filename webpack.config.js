var Webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3333',
    path.resolve(__dirname, 'app', 'main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

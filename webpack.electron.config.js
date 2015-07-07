var Webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: path.resolve(__dirname, 'app', 'main.js'),
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
};

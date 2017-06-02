var path = require('path');
var webpackMerge = require('webpack-merge');

var helpers = require('./helpers');
var commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-mpodule-eval-source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true
            }
          },
          {loader: 'angular2-template-loader'},
          {loader: 'angular-router-loader'}
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});

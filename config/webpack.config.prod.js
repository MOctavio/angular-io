var path = require('path');
var webpackMerge = require('webpack-merge');
var Webpack = require('webpack');
var commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
  entry: './src/app/main.aot.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          },
          {loader: 'angular2-template-loader'},
          {loader: 'angular-router-loader?aot=true'}
        ]
      }
    ]
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin()
  ]
});

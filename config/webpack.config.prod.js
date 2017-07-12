const Webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const helpers = require('./helpers');
const commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
  entry: helpers.getPath('src/main.aot.ts'),
  output: {
    path: helpers.getPath('dist'),
    publicPath: '/',
    filename: '[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
          loader: 'awesome-typescript-loader'
        },
        {
          loader: 'angular2-template-loader'
        },
        {
          loader: 'angular-router-loader?aot=true'
        }
      ]
    }]
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin()
  ]
});
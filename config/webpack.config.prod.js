const Webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const Path = require('./path-helper');
const commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
  entry: Path.getPathFor('src/main.aot.ts'),
  output: {
    path: Path.getPathFor('dist'),
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
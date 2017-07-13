const Webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
  entry: {
    main: './src/main.aot.ts'
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
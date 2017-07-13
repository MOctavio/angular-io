const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { Path } = require('./path-helper');

module.exports = {
  entry: {
    main: './src/main.ts'
  },
  resolve: {
    extensions: [
      '.js', '.ts'
    ],
    modules: [
      Path.ROOT,
      Path.NODE_MODULES
    ]
  },
  output: {
    path: Path.DIST,
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: ['./src/main.js']
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(css)$/,
      loader: 'raw-loader'
    }, {
      test: /\.(scss)$/,
      use: [
        'style-loader',
        'css-loader', {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }],
    exprContextCritical: false
  },
  plugins: [new HtmlWebpackPlugin({
      template: Path.SRC + '/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor'],
      minChunks(module) {
        let context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    })
  ]
};
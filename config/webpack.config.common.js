const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/main.ts',
  resolve: {
    extensions: [
      '.js', '.ts'
    ]
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(css)$/,
      use: ['raw-loader']
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
    template: 'src/index.html'
  })]
};
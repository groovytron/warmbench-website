const path = require('path');

const config = {
  entry: './js/warmbench.js',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {}
        }
      }
    ]
  }
}

module.exports = config;

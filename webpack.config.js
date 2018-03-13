const path = require('path');

const config = {
  entry: './js/warmbench.js',
  output: {
    filename: 'webpack.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

module.exports = config;

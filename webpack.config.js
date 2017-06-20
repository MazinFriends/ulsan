const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, '/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};

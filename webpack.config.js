const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
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
      {
        test: /\.less$/,
        include: __dirname + '/dist',
        loaders: ["style-loader", "css-loader", "less-loader" ]
      }
    ],
  },
  devServer: {
    historyApiFallback: true
  }
};

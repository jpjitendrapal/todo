var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: { path: __dirname, filename: 'script.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
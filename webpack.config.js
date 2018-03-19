// webpack.config.js

var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var webpack = require('webpack'); //to access built-in plugins
var path = require('path');
var outPath = path.join(__dirname, './dist');
var sourcePath = path.join(__dirname, './src');

var config = {
    entry: {
    main: [
      
      './src/index.tsx'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'history',
      'styled-components',
    ],
    bx: [
      "bx-utils",
      "bx-ui",
    ],
    polifil: [ 
      "dialog-polyfill",
    ]
  },
  output: {
    path: outPath,
    publicPath: '/',
    filename: '[name].bundle.js?_=[chunkhash]',
    chunkFilename: '[id].chunk.js?_=[chunkhash]'

  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['main'],
    alias: {
      'bx-ui': path.resolve(__dirname, './src/ui/material'),
      "bx-utils": path.resolve(__dirname, './src/utils')
    }
  },
  mode: 'development',
  target: 'web',
  devServer: {
    contentBase: sourcePath,
    stats: {
      warnings: false
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      }
    ]
  },
  optimization: {
    // splitChunks: {name: 'main', chunks: 'all'}
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

   node: {
    fs: 'empty',
    net: 'empty'
  }
};

module.exports = config;

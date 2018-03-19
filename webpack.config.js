// webpack.config.js

var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var webpack = require('webpack'); //to access built-in plugins
var path = require('path');
var outPath = path.join(__dirname, './dist');
var sourcePath = path.join(__dirname, './src');

var config = {
    entry: {
    main: [
      // "bx-utils",
      // "bx-ui",      
      './src/index.tsx'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'styled-components',
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
    node: {
    fs: 'empty',
    net: 'empty'
  }
};

module.exports = config;

// var webpack = require('webpack');
// var path = require('path');

// // variables
// var isProduction = process.argv.indexOf('-p') >= 0;
// var sourcePath = path.join(__dirname, './src');
// var outPath = path.join(__dirname, './dist');

// // plugins
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//   context: sourcePath,
//   entry: {
//     main: [
//       "bx-utils",
//       "bx-ui",      
//       './index.tsx'],

//     vendor: [
//       'react',
//       'react-dom',
//       'react-redux',
//       'react-router',
//       'redux',
//       'styled-components',
//     ],
//     polifil: [ 
//       "dialog-polyfill",
//     ]
//   },
//   output: {
//     path: outPath,
//     publicPath: '/',
//     filename: '[name].bundle.js?_=[chunkhash]',
//     chunkFilename: '[id].chunk.js?_=[chunkhash]'

//   },
//   target: 'web',
//   resolve: {
//     extensions: ['.js', '.ts', '.tsx'],
//     // Fix webpack's default behavior to not load packages with jsnext:main module
//     // https://github.com/Microsoft/TypeScript/issues/11677
//     mainFields: ['main'],
//     alias: {
//       'bx-ui': path.resolve(__dirname, './src/ui/material'),
//       "bx-utils": path.resolve(__dirname, './src/utils')
//     }
//   },
//   devServer: {
//     contentBase: sourcePath,
//     stats: {
//       warnings: false
//     },
//   },
//   node: {
//     // workaround for webpack-dev-server issue
//     // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
//     fs: 'empty',
//     net: 'empty'
//   }
// };

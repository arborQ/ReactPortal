// webpack.config.js

var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var webpack = require('webpack'); //to access built-in plugins
var path = require('path');
var outPath = path.join(__dirname, './public');
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
    filename: '[name].bundle.[chunkhash].js',
    chunkFilename: '[id].chunk.[chunkhash].js'

  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['main'],
    alias: {
      'bx-ui': path.resolve(__dirname, './src/ui/material'),
      "bx-utils": path.resolve(__dirname, './src/utils'),
      "bx-services": path.resolve(__dirname, "./src/services/index.ts")
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
    rules: [{
      test: /\.tsx?$/,
      use: 'awesome-typescript-loader'
    }]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: sourcePath,
        postcss: [
          require('postcss-import')({
            addDependencyTo: webpack
          }),
          require('postcss-url')(),
          require('postcss-cssnext')(),
          require('postcss-reporter')(),
          require('postcss-browser-reporter')({
            disabled: false
          }),
        ]
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }
};

module.exports = config;

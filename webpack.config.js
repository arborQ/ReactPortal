var webpack = require('webpack');
var path = require('path');

// variables
var isProduction = process.argv.indexOf('-p') >= 0;
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: sourcePath,
  entry: {
    main: [
      "bx-utils",
      "bx-ui",      
      './index.tsx'],

    vendor: [
      'react',
      'react-dom',
      'react-router',
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
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ['main'],
    alias: {
      'bx-ui': path.resolve(__dirname, './src/ui/material'),
      "bx-utils": path.resolve(__dirname, './src/utils')
    }
  },
  module: {
    loaders: [{
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        exclude: [/node_modules/],
        options: { /* Loader options go here */ }
      },
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: isProduction ?
          'awesome-typescript-loader?module=es6' :
          [
            'awesome-typescript-loader'
          ]
      },
      // css
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: !isProduction,
                importLoaders: 1,
                localIdentName: '[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      // static assets
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.png$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.jpg$/,
        use: 'file-loader'
      },
    ],
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
            disabled: isProduction
          }),
        ]
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.LoaderOptionsPlugin({
    //     minimize: true,
    //     debug: false
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProduction
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    contentBase: sourcePath,
    stats: {
      warnings: false
    },
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};

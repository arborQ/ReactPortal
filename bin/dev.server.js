var webpackDevServer = require('webpack-dev-server');
var webpack = require("webpack");
var config = require("../webpack.config.js");
var compiler = webpack(config);

var proxy = {
  "target": {
    "host": "localhost",
    "protocol": 'http',
    "port": 8011
  },
  onError: function() { console.log('error'); },
  secure: false
};

var server = new webpackDevServer(compiler, {
  quiet: false,
  stats: { colors: true, chunks: false },
  hot: true,
  historyApiFallback: true,
  proxy: {
    "/api": proxy,
    "/socket.io" : proxy
  }
});
console.log('Webpack dev server listen: 8080');
server.listen(8080);
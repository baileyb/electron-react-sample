var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV == 'production';
var port = isProduction ? 8080 : 3000;

app.use(express.static(path.resolve(__dirname, '..', 'public')));

if (!isProduction) {
  var bundle = require('./bundle.js');
  bundle();

  app.all('/assets/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:3333'
    });
  });
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
});

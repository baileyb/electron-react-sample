'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 1200, height: 900 });
  mainWindow.loadUrl('file://' + __dirname + '/../public/index.html');
  mainWindow.openDevTools();

  mainWindow.on('close', function() {
    mainWindow = null;
  });
});

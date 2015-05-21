(function () {
  'use strict';

  var gulp = require('gulp');
  var webpack = require('webpack');
  var webpackOptions = require('./webpack.config');
  var WebpackDevServer = require('webpack-dev-server');

  var paths = {
    js: [
      'app.js'
    ]
  };

  gulp.task('build', function (callback) {
    webpack(webpackOptions, function (error, stats) {
      // if error do something here such as gutil error
      callback();
    });
  });

  gulp.task('serve', function (callback) {
    var compiler = webpack(webpackOptions);
    new WebpackDevServer(compiler, webpackOptions.devServer)
      .listen(8090, 'localhost', function () {});
  });

  gulp.task('watch', function (callback) {
    gulp.watch(paths.js, ['build']);
  });

  gulp.task('default', ['serve']);
}());

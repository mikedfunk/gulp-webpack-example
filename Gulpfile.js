(function () {
  'use strict';

  // get dependencies
  var gulp = require('gulp');
  var webpack = require('webpack');
  var webpackOptions = require('./webpack.config');
  var WebpackDevServer = require('webpack-dev-server');

  // for watching
  var paths = {
    js: [ '*.js' ],
    jsx: [ '*.jsx' ]
  };

  gulp.task('build', function (callback) {
    webpack(webpackOptions, function (error, stats) {
      // if error do something here such as gutil error
      callback();
    });
  });

  gulp.task('serve', function (callback) {
    // webpack will serve on port 8090 and hot compile any changes
    var compiler = webpack(webpackOptions);
    new WebpackDevServer(compiler, webpackOptions.devServer)
      .listen(8090, 'localhost', function () {});
  });

  gulp.task('watch', function (callback) {
    // watch for any changes to the js/jsx and build if detected
    gulp.watch(paths.js.concat(paths.jsx), ['build']);
  });

  gulp.task('default', ['serve']);
}());

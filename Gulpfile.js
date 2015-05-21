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

	gulp.task('webpack', function (callback) {
		webpack(webpackOptions, function (error, stats) {
			// if error...
			callback();
		});
	});

	gulp.task('serve', function (callback) {
		var compiler = webpack(webpackOptions);
		var server = new WebpackDevServer(compiler, webpackOptions.devServer);
		server.listen(8080, function () {});
	});

	gulp.task('watch', function (callback) {
		gulp.watch(paths.js, ['webpack']);
	});

	gulp.task('default', ['serve']);
}());

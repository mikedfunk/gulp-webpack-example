var gulp = require('gulp');
var webpack = require('webpack');
var webpackOptions = require('./webpack.config');

gulp.task('webpack', function (callback) {
	webpack(webpackOptions, function (error, stats) {
		// if error...
		callback();
	});
});

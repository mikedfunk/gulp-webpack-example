var gulp = require('gulp');
var webpack = require('webpack');
var webpackOptions = require('./webpack.config');

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

gulp.task('watch', function (callback) {
	gulp.watch(paths.js, ['webpack']);
});

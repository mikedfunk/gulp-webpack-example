(function () {
  'use strict';

  module.exports = {
    entry: './app.js',
    output: {
      // path is required or the dev server will break
      path: "/",
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.jsx$/, loader: "jsx-loader" }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      hot: true,
      stats: {
        colors: true
      }
    }
  };
  
}());

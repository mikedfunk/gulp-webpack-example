(function () {
  'use strict';

  module.exports = {
    entry: './app.js',
    output: {
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
      contentBase: "./",
      hot: true
    }
  };
  
}());

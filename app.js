(function () {
  'use strict';

  // get dependencies
  var Alert = require('./Alert');
  var _ = require('lodash');
  var React = require('react');
  var ReactApp = require('./ReactApp');

  // make sure commonjs dependencies work
  document.getElementById('btn').addEventListener('click', function () {
    console.log('clicked');
    var arr = [1, 2, 3];
    var first = _.first(arr);
    Alert.alert('from lodash: ' + first);
  });

  // make sure react dependency worked
  React.render(
    React.createElement(ReactApp),
    document.getElementById('react-app')
  );
}());

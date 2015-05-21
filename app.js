(function () {
  'use strict';

  var Alert = require('./Alert');
  var _ = require('lodash');
  var React = require('react');
  var ReactApp = require('./ReactApp');

  document.getElementById('btn').addEventListener('click', function () {
    console.log('clicked');
    var arr = [1, 2, 3];
    var first = _.first(arr);
    Alert.alert('from lodash: ' + first);
  });

  React.render(
    React.createElement(ReactApp),
    document.getElementById('react-app')
  );
}());

(function () {
  'use strict';

  var React = require('react');

  // nothing special, just make sure react jsx works
  module.exports = React.createClass({
    render: function () {
      return(
        <h1>Hello from React!</h1>
      );
    }
  });
}());

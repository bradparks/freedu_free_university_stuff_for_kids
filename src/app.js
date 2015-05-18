'use strict';

var React = require('react');

var Search = require('./components/search'),
    Results = require('./components/results'),
    Submit = require('./components/submit');

var App = React.createClass({
  render() {
    return (
      <div>
        <Search />
        <Results />
        <Submit />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));

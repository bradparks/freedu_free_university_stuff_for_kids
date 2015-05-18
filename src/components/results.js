var React = require('react');

var DataStore = require('../stores/data_store');

var Results = React.createClass({
  getInitialState() {
    return { results: DataStore.getResults() };
  },
  render() {
    return (
      <div>
        {JSON.stringify(this.state.results, null, 2)}
      </div>
    );
  }
});

var Section = React.createClass({
  render() {
    return (
      <div>
        {JSON.stringify(this.props.content)}
      </div>
    );
  }
});

module.exports = Results;

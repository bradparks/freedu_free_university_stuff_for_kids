var React = require('react');

var actions = require('../actions/actions');

var Search = React.createClass({
  search(e) {
    actions.filter(e.target.value);
  },
  render() {
    return (
      <div>
        <input type='text' onChange={this.search} placeholder='search' />
      </div>
    );
  }
});

module.exports = Search;

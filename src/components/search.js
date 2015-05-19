var React = require('react');

var actions = require('../actions/actions');

var Search = React.createClass({
  search(e) {
    actions.filter(e.target.value);
  },
  render() {
    return (
      <div id='search-container'>
        <input id='search' type='text' onChange={this.search} placeholder='search by school or by service' />
      </div>
    );
  }
});

module.exports = Search;

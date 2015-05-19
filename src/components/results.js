var React = require('react');

var DataStore = require('../stores/data_store');

var Results = React.createClass({
  mixins: [DataStore.listenTo],
  getInitialState() {
    return { results: DataStore.getResults() };
  },
  _onChange() {
    console.log('updating')
    this.setState({ results: DataStore.getResults() });
  },
  render() {
    var results = this.state.results;
    return (
      <div>
        <div>
          {Object.keys(results).map(o => {
            var cats = results[o];
            return (
              <div>
                <h1 style={{textAlign: 'center'}}>{o}</h1>
                <div>
                  {Object.keys(cats).map(c => {
                    var prods = cats[c]
                    return (
                      <div>
                        <h3>{c}</h3>
                        {Object.keys(prods).map(p => {
                          return (
                            <div>
                              <a href={prods[p].url}>{p}</a>
                              <p>Duration: {prods[p].duration}</p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = Results;

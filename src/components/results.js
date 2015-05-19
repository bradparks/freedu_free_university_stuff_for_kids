var React = require('react');

var DataStore = require('../stores/data_store');

var Results = React.createClass({
  getInitialState() {
    return { results: DataStore.getResults() };
  },
  componentWillMount() {
    DataStore.addChangeListener(this._onChange);
  },
  _onChange() {
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
              <div className='section'>
                <h1 className='section-name'>{o}</h1>
                <div>
                  {Object.keys(cats).map(c => {
                    var prods = cats[c]
                    return (
                      <div>
                        <h3 className='price'>{c}</h3>
                        {Object.keys(prods).map(p => {
                          return (
                            <div>
                              <a className='product' href={prods[p].url}>{p}</a>
                              <p className='duration'>Duration: {prods[p].duration}</p>
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

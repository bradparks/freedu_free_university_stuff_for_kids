var React = require('react'),
    xtend = require('xtend');

var schools = [];
var req = new XMLHttpRequest();
req.open('GET', '/freedu/data/schools.json', false);
req.send(null);
if (req.status === 200) schools = JSON.parse(req.responseText);

var Submit = React.createClass({
  getInitialState() {
    return {
      school: 'all',
      service: '',
      duration: '',
      link: '',
      price: 'free'
    };
  },
  selectSchool(e) { this.setState({ school: e.target.value }); },
  updateService(e) { this.setState({ service: e.target.value }); },
  updateDuration(e) { this.setState({ duration: e.target.value }); },
  updateLink(e) { this.setState({ link: e.target.value }); },
  updatePrice(e) { this.setState({ price: e.target.value }); },
  submit(e) {
    e.preventDefault();
    if (!this.state.service || !this.state.link) {
      alert('You must supply the school, service, and link fields');
      return
    }
    /*
    // The pull request
    req = new XMLHttpRequest();
    req.open()
    */
  },
  render() {
    return (
      <div>
        <form className='submission'>
          <legend>
            <h2>Be cool, submit</h2>
          </legend>
          <select onChange={this.selectSchool}>
            {schools.map(s => { return <option value={s}>{s}</option> })}
          </select>
          <br/>
          <input type='text' onChange={this.updateService} placeholder='Service' />
          <br/>
          <input type='text' onChange={this.updateDuration} placeholder='Duration' />
          <br/>
          <input type='text' onChange={this.updateLink} placeholder='Link' />
          <br/>
          <select>
            {['free','discount'].map(p => {return <option value={p}>{p}</option>})}
          </select>
          <br/>
          <input type='submit' onClick={this.submit} />
        </form>
      </div>
    );
  }
});

module.exports = Submit;

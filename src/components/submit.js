var React = require('react'),
    xtend = require('xtend');

var schools = [];
var req = new XMLHttpRequest();
req.open('GET', '/data/schools.json', false);
req.send(null);
if (req.status === 200) schools = JSON.parse(req.responseText);

var Submit = React.createClass({
  getInitialState() {
    return {
      school: 'all',
      service: '',
      duration: '',
      link: ''
    };
  },
  selectSchool(e) { this.setState({ school: e.target.value }); },
  updateService(e) { this.setState({ service: e.target.value }); },
  updateDuration(e) { this.setState({ duration: e.target.value }); },
  updateLink(e) { this.setState({ link: e.target.value }); },
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
        <select onChange={this.selectSchool}>
          {schools.map(s => { return <option value={s}>{s}</option> })}
        </select>
        <input type='text' onChange={this.updateService} placeholder='Service' />
        <input type='text' onChange={this.updateDuration} placeholder='Duration' />
        <input type='text' onChange={this.updateLink} placeholder='Link' />
        <input type='submit' onClick={this.submit} />
      </div>
    );
  }
});

module.exports = Submit;
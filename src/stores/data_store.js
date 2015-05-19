var xtend = require('xtend'),
    { EventEmitter } = require('events');

var Dispatcher = require('../dispatcher/dispatcher'),
    Constants = require('../constants/constants');  

var data;

var req = new XMLHttpRequest();
req.open('GET', '/freedu/data/data.json', false);
req.send(null);
if (req.status === 200) {
  data = JSON.parse(req.responseText);
}

var filtered = data;

function search(input) {
  var out = {};
  for (var key in data) {
    if (key.toLowerCase().indexOf(input.toLowerCase()) > -1) {
      out[key] = data[key];
      continue;
    }
  }
  return out;
}

var CHANGE_EVENT = 'change';

var DataStore = xtend(EventEmitter.prototype, {
  getResults: () => filtered,
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  dispatcherIndex: Dispatcher.register(payload => {
    var action = payload.action;
    switch (action.source) {
      case Constants.FILTER:
        filtered = search(action.input);
        break;
    }
    DataStore.emitChange(action.actionType);
    return true;
  })
});

module.exports = DataStore;

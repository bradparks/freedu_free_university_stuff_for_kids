var xtend = require('xtend'),
    { EventEmitter } = require('events');

var Dispatcher = require('../dispatcher/dispatcher'),
    Constants = require('../constants/constants');  

var data;

var req = new XMLHttpRequest();
req.open('GET', '/data/data.json', false);
req.send(null);
if (req.status === 200) {
  data = JSON.parse(req.responseText);
}

var filtered = data;

function search(input) {
  var out = {};
  for (var key in data) {
    if (key.indexOf(input) > - 1) {
      out[key] = data[key];
      continue;
    }
  }
  return out;
}

var CHANGE_EVENT = 'change';

module.exports = xtend(EventEmitter, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getResults() {
    return filtered;
  },
  dispatcherIndex: Dispatcher.register(payload => {
    var action = payload.action;
    switch (action.source) {
      case Constants.FILTER:
        filtered = search(action.input);
        break;
    }
  })
});

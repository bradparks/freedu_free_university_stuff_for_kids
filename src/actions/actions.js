var Dispatcher = require('../dispatcher/dispatcher'),
    Constants = require('../constants/constants');

var Actions = {
  filter(input) {
    Dispatcher.handleViewAction({
      source: Constants.FILTER,
      input: input
    });
  }
};

module.exports = Actions;

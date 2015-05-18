var React = require('react'),
    Router = require('react-router'),
    { Route } = Router;

var App = require('./src/app');

var routes = (
  <Route handler={App}>
  </Route>
);

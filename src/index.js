export { default } from './datamap.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './components/routes.js';
import { Router, Route, Link, hashHistory } from 'react-router';
//import react-world-map
// var WorldMap = require('react-world-map');


ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
document.querySelector('#root-container'));

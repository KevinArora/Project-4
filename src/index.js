export { default } from './datamap.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './components/routes.js';
import { Router, Route, Link, hashHistory } from 'react-router';
//import react-world-map
// var WorldMap = require('react-world-map');
import MainPage from './components/MainPage/Mainpage.jsx'
import App from './components/App.jsx';

ReactDOM.render(
  <App />,
document.querySelector('#root-container'));

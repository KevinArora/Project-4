import React from 'react';
import App from './App.jsx';
import LoginForm from './Login/LoginForm.jsx';
import Welcome from './Welcome/Welcome.jsx';
import SignupForm from './Signup/SignupForm.jsx';
import { Route, IndexRoute } from 'react-router';
// import WorldMap from './WorldMap/WorldMap.jsx'
import MainPage from './MainPage/Mainpage.jsx'
var WorldMap = require('react-world-map');
// import MapView from "./MapView/MapView.jsx";
// <MapView {...props} />


module.exports = (
    <Route path="/" component={App} >
     <Route path='/home' component={MainPage} />
     <Route path="/welcome" component={Welcome} />
     <Route path="/login" component={LoginForm} />
     <Route path="/signup" component={SignupForm} />
    </Route>
);

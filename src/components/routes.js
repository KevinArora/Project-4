import React from 'react';
import App from './App.jsx';
import LoginForm from './Login/LoginForm.jsx';
import Welcome from './Welcome/Welcome.jsx';
import SignupForm from './Signup/SignupForm.jsx';
import { Route, IndexRoute } from 'react-router';

module.exports = (
    <Route path="/" component={App} >
     <Route path="/welcome" component={Welcome} />
     <Route path="/login" component={LoginForm} />
     <Route path="/signup" component={SignupForm} />
    </Route>
);

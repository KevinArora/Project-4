import React, { Component } from 'react';
import style from './LoginForm.css';
import { Link } from 'react-router';

// rafa code
class LoginForm extends Component {


  render(){
    return (
      <div className="intro-pages">
      <h1 className="intro-title">Log in</h1>
      <div id='link-container'>
        <input
          type="text"
          placeholder="email"
          value={this.props.login.username}
          onChange={this.props.updateFormLogUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.login.password}
          onChange={this.props.updateFormLogPassword}
        />
        <Link to="home">
        <button onClick={this.props.handleLog}>
          Log In!
        </button>
         </Link>
      </div>
      </div>
    );
  }
}

export default LoginForm;

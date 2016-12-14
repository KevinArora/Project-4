// import the libs we need
import React, { Component } from 'react';
import SignupForm from './Signup/SignupForm.jsx';
import LoginForm from './Login/LoginForm.jsx';
import Welcome from './Welcome/Welcome.jsx';
import './normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {
 constructor(props) {
    super();
    // console.log(this);
    this.state = {
      signup: {
        username: '',
        password: ''
      },
      login: {
        loggedIn: false,
        username: '',
        password: '',
        id: ''
      },
      videos: [],
      location: 'in'
    }
  }
  handleClick(e){
    this.setState({
      location: e.target.value
    })
  }
worldtube(Region){

  fetch(`api/youtube/${Region}`)
    .then(r => r.json())
    .then(data=> {
      this.setState({
        videos: data
      })
      console.log(this.state.videos)
    })
}
//rafa code from LE puppies
  //________________USERS________________
 //handles and updates all changes in the input field for sign up and
  updateFormSignUpUsername(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: e.target.value,
        password: this.state.signup.password
      }
    });
  }
 //handles updates for all changes in the input field
  updateFormSignUpPassword(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value
      }
    });
  }
  //handles changes for the username login field
  updateFormLogInUsername(e) {
    console.log(e.target.value);
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password
      }
    });
  }
  //handles all changes for the login password field
  updateFormLogInPassword(e) {
    console.log(e.target.value);
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value
      }
    });
  }
 //posts new user credentials to the DB via fetch
  handleSignUp() {
    fetch('/users/signup', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password
      })
    })
    .then(r => r.json())
    .then((data) => console.log(data))
    .then(() => console.log('You have signed up!'))
    .catch(err => console.log(err));
  }
 //fetches credentials which undergoes authentication before coming over.
  handleLogIn() {
    console.log('test');
    fetch('/users/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password
      })
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
      login: {
        username: data.name,
        password: data.password,
        id: data.id,
      }

    })})
    .then(console.log(this.state.login.id))
    .then(console.log('succesful login'))
    .catch(err => console.log(err));
  }
 //when login is a success
  onSuccessfulLogIn(a,b) {
    console.log(a,b);
  }

 /*this.props.children passes the included items as state for all child functions
  kind of inefficient but we needed to pass state to unrendered components on separate routes*/

  render(){
  return (
      <div>
      <button onClick={() => this.worldtube(this.state.location)}>click</button>
      <div>

        {this.props.children && React.cloneElement(this.props.children, {
          state: 'test',
          signup: this.state.signup,
          login: this.state.login,
          updateFormLogPassword: (event) => this.updateFormLogInPassword(event),
          updateFormLogUsername: (event) => this.updateFormLogInUsername(event),
          updateFormSignUsername: (event) => this.updateFormSignUpUsername(event),
          updateFormSignPassword: (event) => this.updateFormSignUpPassword(event),
          handleSign:()=> this.handleSignUp(),
          handleLog:()=> this.handleLogIn(),

        })}
      </div>


    </div>

    );
  }
}

export default App;

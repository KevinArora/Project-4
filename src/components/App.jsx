// import the libs we need
import React, { Component } from 'react';
import SignupForm from './Signup/SignupForm.jsx';
import LoginForm from './Login/LoginForm.jsx';
import Welcome from './Welcome/Welcome.jsx';
import './normalize.css';
import style from './App.css';
import { Link, browserHistory } from 'react-router';
import MainPage from './MainPage/Mainpage.jsx';


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
      videoViews:'',
      location: 'in',
      na: "map-unselected",
      sa: "map-unselected",
      af: "map-unselected",
      eu: "map-unselected",
      as: "map-unselected",
      oc: "map-unselected",
      clicked: 'none',
      selected: '',
    }
  }

  // componentWillMount() {
  //   browserHistory.push('/signup/#')
  // }

changeSelection(num) {
    this.setState({
      selected: this.state.videos[num],
    });
  }

  onMapClick(area) {

    let mapState1 = {
      clicked: 'none',
      na: "map-unselected",
      sa: "map-unselected",
      af: "map-unselected",
      eu: "map-unselected",
      as: "map-unselected",
      oc: "map-unselected"
    }
    mapState1[area] = 'map-unselected';

    let mapState2 = {
      clicked: area,
      na: "map-unselected",
      sa: "map-unselected",
      af: "map-unselected",
      eu: "map-unselected",
      as: "map-unselected",
      oc: "map-unselected"
    };
    mapState2[area] = 'map-selected';

    this.setState(
      function() {
        if (this.state.clicked === area) {
          return mapState1;
        } else {
          return mapState2;
        }
      }
    )
    let yolo = ''
    if(area == 'oc')yolo = 'AU'
      if(area == 'na')yolo = 'US'
        if(area == 'as')yolo = 'JP'
          if(area == 'eu')yolo = 'GB'
            if(area == 'sa')yolo = 'MX'
              if(area == 'af')yolo = 'ZA'

  this.worldtube(yolo)
  }

  handleClick(e){
    this.setState({
      location: e.target.value
    })
  }
worldtube(Region){
console.log(Region)
  fetch(`api/youtube/${Region}`)
    .then(r => r.json())
    .then(data=> {
      this.setState({
        videos: data.items
      })
      console.log(this.state.videos)
    })
}
videoViews(id){
// console.log(id)
  fetch(`api/youtube/video/${id}`)
    .then(r => r.json())
    .then(data=> {
      // console.log(data.items[0].statistics.viewCount)
      // return data.items[0].statistics.viewCount;

      this.setState({
        videoViews: data.items[0].statistics.viewCount
      })
      // console.log(this.state.videoViews)
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
loginCheck(){
  if(this.state.login.username == '') {
    return <Link to="signup" >Sign up</Link>
  }
}
 /*this.props.children passes the included items as state for all child functions
  kind of inefficient but we needed to pass state to unrendered components on separate routes*/

  render(){
  return (
      <div>
        <MainPage />


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
          na: this.state.na,
          sa: this.state.sa,
          af: this.state.af,
          eu: this.state.eu,
          as: this.state.as,
          oc: this.state.oc,
          onMapClick: this.onMapClick.bind(this),
          videos: this.state.videos,
          changeSelection: this.changeSelection.bind(this),
          getViews:this.videoViews,
          videoViews:this.state.videoViews

        })}
      </div>


    </div>

    );
  }
}

export default App;

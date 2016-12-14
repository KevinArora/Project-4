import React, { Component } from 'react';
import WorldMap from '../WorldMap/WorldMap.jsx';
import Sidebar from '../sidebar/sidebar.jsx'
export default class MainPage extends Component{
  render(){
    return(
      <div>
        <h1>eat shit friend</h1>
        <WorldMap
          na={this.props.na}
          sa={this.props.sa}
          af={this.props.af}
          eu={this.props.eu}
          as={this.props.as}
          oc={this.props.oc}
          onMapClick={this.props.onMapClick}

          />
          <Sidebar
          changeSelection={this.props.changeSelection}
          videos={this.props.videos}
          />
      </div>
    );
  }
}

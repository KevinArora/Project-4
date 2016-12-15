import React, { Component } from 'react';
import WorldMap from '../WorldMap/WorldMap.jsx';
import Sidebar from '../sidebar/sidebar.jsx'
import image from '../../img/worldtube.png'
export default class MainPage extends Component{
  render(){
    return(
     <div>

      <div className='synclair-is-grumpy'>
        <img className='Banner' src={image} />
        <h1 className='pad-dat-shit'>Welcome, {this.props.login.username}</h1>

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
          videoViews={this.props.videoViews}
          getViews={this.props.getViews}
          />
      </div>
      </div>
    );
  }
}

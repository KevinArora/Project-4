import React, { Component } from 'react'
import Videolist from '../Videolist/Videolist.jsx'

export default class Sidebar extends Component {

  render(){
    return(

    <Videolist
    changeSelection={this.props.changeSelection}
    videos={this.props.videos}
    videoViews={this.props.videoViews}
    getViews={this.props.getViews}
    />

    );
  }
}

import React, { Component } from 'react';

export default class Video extends Component {
  render(){
  return(
    <span className="video-item">
    <img src={this.props.video.snippet.thumbnails.default.url} width="100px" height="100px"/>
    <h4>{this.props.video.snippet.localized.title}</h4>

    </span>
    )
}
}


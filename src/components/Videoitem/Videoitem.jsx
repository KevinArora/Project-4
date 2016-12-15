import React, { Component } from 'react';

export default class Video extends Component {
  render(){
    // console.log(this.props.getViews(this.props.video.id))
    return(
      <div className="video-item">
        <span className='top-portion'>
          <span className='information' >
            <h4 className="video-title">{this.props.video.snippet.localized.title}</h4>
            <h6 className="channel-title">by: {this.props.video.snippet.channelTitle} </h6>

          </span>
          <img className='video-image' src={this.props.video.snippet.thumbnails.default.url} width="130px" height="100px"/>

        </span>
      </div>
      )
    }
  }


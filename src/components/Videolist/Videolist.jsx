import React, { Component} from 'react';
import Video from '../Videoitem/Videoitem.jsx';

export default class Videoitem extends Component{
  listVideos(collection) {
    return collection.map((video, index) =>
      <article key={index} className="video-item" onClick={()=>this.props.changeSelection(index)}>
        <Video video={video} />
     </article>
    );
  }
  render(){
    return (
      <div className="list-container">
        {this.listVideos(this.props.videos)}
      </div>
    );
  }
}

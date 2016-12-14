import React, { Component } from 'react';
var Worldo = require('react-world-map');
import datamap from '../basic-example.jsx'
export default class WorldMap extends Component {



render(){
 return(
  <div className="map-container">
  <Worldo />
  <datamap />
  <h1>In World Map </h1>

  </div>
  );
 window.addEventListener('WorldMapClicked', function(e) {console.log('map was clicked, current selection is: ', e.detail.clickedState)});
}
}

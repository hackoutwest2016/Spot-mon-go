import React, { Component } from 'react';
import Menu from '../../components/menu';
import style from './mySpotemon.scss';
import tools from '../../modules/tools.js'
import api from '../spotemon/spotemon_2.js';

export default class MySpotemon extends Component {
  	render() {
      var spotemonIds = this.state.spotemon;
      var namesList =spotemonIds.map(function(name){
        return <li> {name}</li>;
      })

    	return (
			<div className="wrapper">
        <div className="header">
  				<h1>MY SPOTÉMON</h1>
          <div>87/143</div>
          <div className="line"></div>
        </div>
				

        <div className="artist">
          <div className="cp-text">CP</div>
          <div className="cp-points">70</div>
          <div className="image"><img src={this.state.image} alt = "Artist Icon"/></div>
          <div className="name">{this.state.initialized? this.state.artistName : 'Loading'}</div>
        </div>

			</div>
	    );

  	}

    constructor(){
      super();

      this.state = {
        initialized: false,
        spotemonIds: tools.getMyProp('spotemon'),
        spotemon: []
      }

      var self = this;

      var loadedSpotemons = [];

      this.state.spotemonIds.forEach(function(id){
        api.getArtist(id, function(response){
          loadedSpotemons.push({
            name: response.name,
            charismaPoints: response.charismaPoints,
            image: response.images[0],
            spotemonId: id
          });

          self.setState(Object.assign({}, self.state, {spotemon: loadedSpotemons}));
        });
      });
    }
}

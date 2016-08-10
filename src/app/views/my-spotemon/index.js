import React, { Component } from 'react';
import Menu from '../../components/menu';
import style from './mySpotemon.scss';
import tools from '../../modules/tools.js'
import api from '../spotemon/spotemon_2.js';
import { Link } from 'react-router';


export default class MySpotemon extends Component {
  	render() {
      var spotemonIds = this.state.spotemon;
      var namesList =spotemonIds.map(function(spotemon){
        return( 
          <div key={spotemon.spotemonId} className="artist">
            <div className="cp-text">CP</div>
            <div className="cp-points">{spotemon.charismaPoints}</div>
            <Link to={"/spotemon/" + spotemon.spotemonId}> 
                <div className="image">
                  <img src={spotemon.image} alt = "Artist Icon"/>
                </div>
            </Link>
           
            <div className="name">{spotemon.name }</div>
          </div>
        )
      })

    	return (
			<div id="myspotemon" className="wrapper">
        <div className="header">
  				<h1>MY SPOTÉMON</h1>
          <div>87/143</div>
          <div className="line"></div>
        </div>
        {namesList}
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
            charismaPoints: response.popularity,
            image: response.images[1].url,
            spotemonId: id
          });

          self.setState(Object.assign({}, self.state, {spotemon: loadedSpotemons}));
        });
      });
    }
}

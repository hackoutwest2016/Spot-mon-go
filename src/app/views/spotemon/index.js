import React, { Component } from 'react';
import $ from 'jquery';
import spot from './spotemon_2';
import style from './spotemon.scss';

export default class Spotemon extends Component {
  	render() {
    	return (
    		<div id="spotemon">
			    <h3>CP: {this.state.initialized ? this.state.carismaPoints : 'Loading'}</h3>
    			<img src = {this.state.image} alt = "Artist Icon" /> 
			    <div id="results">
			    	<h4>Name:</h4>
			    	<p>{this.state.initialized ? this.state.artistName : 'Loading'}</p>
			    </div>
			</div>
	    );
	  }
	  constructor(){
	  	super();
	  	this.state = {
			initialized: false,
			artistName: '',
			topTrack: '',
			carismaPoints: 0,
			image: null,
			artistId: null
		}
	  }
	componentDidMount(){
		var self = this;

		var artistId = this.props.params.spotemonId;
		self.setState(Object.assign({}, self.state, {artistId: artistId}));

		var audio = new Audio();

		spot.getArtistTopTracks(artistId,function (response) {
			spot.getTrackToPlay(response.tracks[1].id, function(response){
				self.setState(Object.assign({}, self.state, {artistName: response.artists[0].name, initialized:true, topTrack: response.name})),
				audio = new Audio (response.preview_url),
 				audio.play()

			})
		})

		spot.getArtistPopularity(artistId,function (response) {
			self.setState(Object.assign({}, self.state, {carismaPoints: response.popularity, image: response.images[1].url}));
		})

	}
	
	
};

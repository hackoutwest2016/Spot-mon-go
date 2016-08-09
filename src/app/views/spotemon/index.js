import React, { Component } from 'react';
import $ from 'jquery';
import spot from './spotemon_2';

export default class Spotemon extends Component {
  	render() {
    	return (
    		<div>

    			<img src = {this.state.image} alt = "Artist Icon" height="42" width="42"/> 
			    <div id="results">
			    	<p>Carisma Points: {this.state.initialized ? this.state.carismaPoints : 'Laddar'}</p>
			    	<p>{this.state.initialized ? this.state.artistName : 'Laddar'}</p>

			    </div>
			</div>
	    );
	  }

	componentDidMount(){
		var self = this;

		this.state = {
			initialized: false,
			artistName: '',
			topTrack: '',
			carismaPoints: 0,
			image: '',
			artistId: this.props.params.userId
		}
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

// export default class Spotemon extends Component {
//   	render() {
//     	return (
// 			<div>Spotemon</div>
// 	    );
//   	}
// }

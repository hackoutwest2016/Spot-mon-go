import React, { Component } from 'react';
import $ from 'jquery';
import spot from './spotemon_2';
import style from './spotemon.scss';
import ProgressBar from 'progressbar.js';

export default class Spotemon extends Component {
  	render() {
    	return (
    		<div className="wrapper">
    		<div id="spotemon">
			    <div className = "cp-text">CP: </div>
			    <div className = "cp-points">{this.state.initialized ? this.state.carismaPoints : 'Loading'}</div>
    			<div id = "container"></div>
    			<hr/>
    			<img src = {this.state.image} alt = "Artist Icon" /> 
			    <div id="results">
			    	<div className = "name">Name: </div>
			    	<div className = "nameId">{this.state.initialized ? this.state.artistName : 'Loading'}</div>
			    </div>
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

		this.audio = new Audio();
		spot.getArtistTopTracks(artistId,function (response) {
			spot.getTrackToPlay(response.tracks[1].id, function(response){
				self.setState(Object.assign({}, self.state, {artistName: response.artists[0].name, initialized:true, topTrack: response.name})),
				self.audio.src = response.preview_url,
 				self.audio.play()

			})
		})

		spot.getArtist(artistId,function (response) {
			self.setState(Object.assign({}, self.state, {carismaPoints: response.popularity, image: response.images[1].url}));

		})

		var bar = new ProgressBar.SemiCircle(container, {
			strokeWidth: 2,
			easing: 'easeInOut',
			duration: 1300,
			color: '#FFEA82',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: null
		});
		bar.animate(0.67);
	}

    componentWillUnmount() {
        this.audio.pause();
    }
};

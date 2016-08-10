import React, { Component } from 'react';
import { Link } from 'react-router';
import tools from '../../modules/tools';

import style from './catch.scss';

export default class Catch extends Component {
	componentDidMount() {
		this.addSpotemon();
	}

	addSpotemon() {
		const spotemonId = this.props.params.spotemonId;

		let found = false;
		myself.spotemon.forEach((spotemon) => {
			if(spotemon === spotemonId){
				found = true;
			}
		});

		if(!found){
			myself.spotemon.push(spotemonId);

			tools.saveMySelf();
		}
	}

  	render() {
    	return (
			<div className="message-view">
				<h1>A new Spotémon was caught!</h1>
				<img src={require('../../assets/images/artist.png')} width="180" height="180" />
				<Link to={"/spotemon/" + this.props.params.spotemonId}><button className="btn popup-btn popup-btn-accept">Check it out</button></Link>
				<Link to="/"><button className="btn popup-btn popup-btn-decline">Later</button></Link>
			</div>
	    );
  	}
}

import React, { Component } from 'react';
import tools from '../../modules/tools';

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
			<div>Catch: {this.props.params.spotemonId}</div>
	    );
  	}
}

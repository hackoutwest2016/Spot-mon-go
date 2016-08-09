import React, { Component } from 'react';
import style from './challange.scss';

export default class Battle extends Component {
	constructor () {
		super();

		this.state = {
			open: true
		}
	}

  	render() {
    	return (
			<div className="popup-container">
				<div className="popup">
					<p>A Spotémon manager has challanged you!</p>
					<button className="popup-btn popup-btn-accept">Accept</button>
					<button className="popup-btn popup-btn-decline">Decline</button>
				</div>
			</div>
	    );
  	}
}

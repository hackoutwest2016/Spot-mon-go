import React, { Component } from 'react';
import style from './challange.scss';

export default class Battle extends Component {
  	render() {
    	return (
			<div className="popup-container">
				<div className="popup">
					<p>A Spotémon manager has challanged you!</p>
					<button class="popup-btn popup-btn-accept">Accept</button>
					<button class="popup-btn popup-btn-decline">Decline</button>
				</div>
			</div>
	    );
  	}
}

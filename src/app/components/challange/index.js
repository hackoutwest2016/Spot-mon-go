import React, { Component } from 'react';
import style from './challange.scss';

export default class Challange extends Component {
	constructor () {
		super();

		this.state = {
			open: true,
			loading: true
		};

		this.cancel = this.cancel.bind(this);
	}

	accept () {
		this.setState(Object.assign({}, this.state, {open:false}));
	}
	decline () {
		this.setState(Object.assign({}, this.state, {open:false}));
	}
	cancel () {
		this.decline();
	}

  	render() {
    	return (
			<div className={'popup-container ' + (this.state.open ? '' : 'hide')}>
				<div className="popup">
					<div className={this.state.loading ? 'hide' : ''}>
						<h1 className="header">A Spotémon manager has challanged you!</h1>
						<button className="btn popup-btn popup-btn-accept">Accept</button>
						<button className="btn popup-btn popup-btn-decline">Decline</button>
					</div>
					<div className={this.state.loading ? '' : 'hide'}>
						<h1 className="header loading-text">Laddar...</h1>
						<img width="50" height="50" onClick={this.cancel} src={require('../../assets/images/cancel.png')} />
					</div>
				</div>
			</div>
	    );
  	}
}

import React, { Component } from 'react';
import style from './challange.scss';

export default class Challange extends Component {
	constructor () {
		super();

		this.state = {
			open: false,
			loading: false
		};

		this.show = this.show.bind(this);
		this.cancel = this.cancel.bind(this);
	}

	show () {
		this.setState(Object.assign({}, this.state, {open:true}));
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
						<button onClick={this.props.accept} className="btn popup-btn popup-btn-accept">Accept</button>
						<button onClick={this.props.decline} className="btn popup-btn popup-btn-decline">Decline</button>
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

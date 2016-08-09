import React, { Component } from 'react';
import style from './menu.scss';

import {Link} from 'react-router';

export default class Menu extends Component {
	constructor () {
		super();

		this.state = {
			menuOpen: false
		};

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu () {
		this.setState(Object.assign({}, this.state, {menuOpen:!this.state.menuOpen}));
	}

  	render() {
    	return (
			<nav id="menu" className={this.state.menuOpen ? 'open' : ''}>
				<div id="folded-menu">
					<div className="folded-menu-item">
						<Link to="/spotedex">
							<img src={require('../../assets/images/artist.png')} className="menu-image folded-menu-image" id="spotedex-btn"/>
						</Link>
						<Link to="/my-spotemon">
							<img src={require('../../assets/images/artist.png')} className="menu-image folded-menu-image" id="spotemon-btn"/>
						</Link>

						<img src={require('../../assets/images/cancel.png')} onClick={this.toggleMenu} className="menu-image folded-menu-image" id="menu-exit-btn"/>
					</div>
				</div>
				<div id="bottom-menu">
					<div className="bottom-menu-item-container bottom-menu-item" id="user-btn">
						<Link to="/user">
							<img src={require('../../assets/images/user.png')} className="menu-image bottom-menu-image" />
						</Link>
					</div>
					<div className="bottom-menu-item-container bottom-menu-item" id="main-menu-btn">
						<img src={require('../../assets/images/lpikon.png')} onClick={this.toggleMenu} className="menu-image bottom-menu-image" />
					</div>
				</div>
			</nav>
	    );
  	}
}

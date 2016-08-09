import React, { Component } from 'react';

import Menu from '../components/menu';
import Challange from '../components/challange';

import $ from 'jquery';

export default class App extends Component {
	constructor () {
		super();

		const user = localStorage.getItem('user');

		if(!user){
			const id = new Date().getTime();

			localStorage.setItem('user', JSON.stringify({id}));
		}

		global.myself = JSON.parse(localStorage.getItem('user'));
	}

  	render() {
    	return (
			<div>
				<Menu />
				<Challange />
		   		{this.props.children}
	   		</div>
    	);
  	}
}

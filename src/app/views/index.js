import React, { Component } from 'react';

import Menu from '../components/menu';
import Challange from '../components/challange';

import tools from '../modules/tools';

export default class App extends Component {
	constructor () {
		super();

		let user = tools.getMyProp();

		if(!user || !user.id || !user.spotemon){
			user = {
				id: new Date().getTime(),
				spotemon: []
			};
		}

		global.myself = user;

		tools.saveMySelf();
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

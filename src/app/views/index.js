import React, { Component } from 'react';
import $ from 'jquery';

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

    fullscreen() {
        $('#start').remove();
        let elem = document.querySelector('body > div#root');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    }

  	render() {
    	return (
			<div>
                <button id="start" onClick={this.fullscreen}>Start!</button>
				<Menu />
				<Challange />
		   		{this.props.children}
	   		</div>
    	);
  	}
}

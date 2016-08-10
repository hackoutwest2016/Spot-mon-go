import React, { Component } from 'react';
import $ from 'jquery';
import io from 'socket.io-client';

import Menu from '../components/menu';
import Challange from '../components/challange';

import tools from '../modules/tools';

export default class App extends Component {
	constructor () {
		super();

		this.initUser();
	}

	componentDidMount () {
		this.initBattleSocket();
	}

	initUser () {
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
	initBattleSocket () {
		this.socket = io();

		this.socket.emit('identification', myself.id);
		this.socket.emit('challange', {
			challangeId: new Date().getTime(),
			challangerId: myself.id,
			spotemon: {},
			opponentId: 2
		});

		this.socket.on('challanged', function(opponentId) {
			console.log('Challanged by: ' + opponentId);
		});

		this.socket.on('accepted', function(){
			console.log('accepted');
		});

		this.socket.on('start', function(){
			console.log('Start challange');
		});
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

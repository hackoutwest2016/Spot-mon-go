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
		var self = this;
		global.currentChallange = {
			activeBattle: false
		};

		this.socket = io();

		this.socket.emit('identification', myself.id);
		// this.socket.emit('challange', {
		// 	challangeId: new Date().getTime(),
		// 	challangerId: myself.id,
		// 	spotemon: {},
		// 	opponentId: 2
		// });

		this.socket.on('challanged', function(challange) {
			if(!currentChallange.activeBattle){
				self.refs.challange.show();
				console.log('Challanged by: ' + challange);
			}
		});

		this.socket.on('accepted', function(){
			console.log('accepted');
		});

		this.socket.on('start', function(){
			console.log('Start challange');
		});

		this.acceptChallange = this.acceptChallange.bind(this);
		this.declineChallange = this.declineChallange.bind(this);
	}

	acceptChallange() {
		console.log('accept');
		this.socket.emit('accept', {});
	}

	declineChallange() {
		console.log('decline challange');
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
				<Challange ref="challange" accept={this.acceptChallange} decline={this.declineChallange} />
		   		{this.props.children}
	   		</div>
    	);
  	}
}

import React, { Component } from 'react';
import Menu from '../../components/menu';
import style from './user.scss';


export default class User extends Component {
  	render() {
    	return (
			<div id = "user">
    			<img src = {require('../../assets/images/user.png')} alt = "User Icon" /> 

				<div className = "name">Name: </div>
				<div className = "userName"> {this.state.initialized ? this.state.userName : 'Loading'}</div>
				<div className = "recordLabel">{this.state.initialized ? this.state.recordLabel : 'Loading'}</div>
				<div className = "spotemonFetched"> Antal Spotémon: {this.state.initialized? this.state.spotemonsFetched : 'Loading'}</div>
			</div>
	    );
  	}
    constructor(){
	  	super();
	  	this.state = {
			initialized: false,
			userName: 'Lotta',
			recordLabel: 'No Label chosen',
			spotemonsFetched: 0
		}
	  }
}

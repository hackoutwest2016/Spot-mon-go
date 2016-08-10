import React, { Component } from 'react';
import Menu from '../../components/menu';
import style from './user.scss';
import tools from '../../modules/tools.js';

export default class User extends Component {
  	render() {
    	return (
    		<div className ="wrapper">
			<div id = "user">
    			<img src = {require('../../assets/images/avatar.png')} alt = "User Icon" /> 
				<hr/>
				<div className = "name">Name: </div>
				<div className = "userName"> {this.state.initialized ? this.state.userName : 'Loading'}</div>
				<br/>
				<div className = "recordLabel">Record label: </div> <div className = "recordLabelName"> {this.state.initialized ? this.state.recordLabel : 'Loading'}</div>
				<br/>
				<div className = "spotemonFetched"> Antal spotémon fångade: </div> <div className ="spotemonData"> {this.state.initialized? this.state.spotemonsFetched : 'Loading'}</div>
			</div>
			</div>
	    );
  	}
    constructor(){
	  	super();
	  	this.state = {
			initialized: false,
			userName: 'Lotta på Bråkmakargatan',
			recordLabel: 'Downtown Records',
			spotemonsFetched: tools.getMyProp('spotemon').length
		}
	 }
	 componentDidMount(){
		var self = this;
		this.setState(Object.assign({}, self.state, {initialized:true}));

	 }

}

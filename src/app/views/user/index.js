import React, { Component } from 'react';
import Menu from '../../components/menu';
import style from './user.scss';


export default class User extends Component {
  	render() {
    	return (
			<div id = "user">
    			<img src = {require('../../assets/images/user.png')} alt = "User Icon" /> 
				<hr/>
				<div className = "name">Name: </div>
				<div className = "userName"> {this.state.initialized ? this.state.userName : 'Loading'}</div>
				<br/>
				<div className = "recordLabel">Record label: </div> <div className = "recordLabelName"> {this.state.initialized ? this.state.recordLabel : 'Loading'}</div>
				<br/>
				<div className = "spotemonFetched"> Antal spotémon fångade: </div> <div className ="spotemonData"> {this.state.initialized? this.state.spotemonsFetched : 'Loading'}</div>
			</div>
	    );
  	}
    constructor(){
	  	super();
	  	this.state = {
			initialized: false,
			userName: 'Lotta',
			recordLabel: 'No label chosen yet',
			spotemonsFetched: 0
		}
	 }
	 componentDidMount(){
		var self = this;
		this.setState(Object.assign({}, self.state, {initialized:true}));
	 }

}

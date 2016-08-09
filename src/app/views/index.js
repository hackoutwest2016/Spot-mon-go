import React, { Component } from 'react';
import Menu from '../components/menu/index';
import style from './main.scss';

export default class App extends Component {
  render() {
    return (
		<div>
      		<h1>Hello, world</h1>
	  		<Menu />
		</div>
    );
  }
}

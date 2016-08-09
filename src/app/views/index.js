import React, { Component } from 'react';

import Menu from '../components/menu';
import Challange from '../components/challange';

export default class App extends Component {
  render() {
    return (
		<div>
			<Menu />
			<div id="popups">
				<Challange />
			</div>
		   {this.props.children}
	   	</div>
    );
  }
}

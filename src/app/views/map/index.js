import React, { Component } from 'react';

import MapHandler from './map-handler';
import Menu from '../../components/menu';

export default class Map extends Component {
  	render() {
    	return (
			<div>
				<MapHandler />
				<Menu />
			</div>
	    );
  	}
}

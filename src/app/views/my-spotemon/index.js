import React, { Component } from 'react';
import Menu from '../../components/menu';
import style from './mySpotemon.scss';

export default class MySpotemon extends Component {
  	render() {
    	return (
			<div className="wrapper">
        <div className="header">
  				<h1>MY SPOTÉMON</h1>
          <div>87/143</div>
          <div className="line"></div>
        </div>
				

        <div className="artist">
          <div className="cp-text">CP</div>
          <div className="cp-points">70</div>
          <div className="image"><img src="http://hakanhellstrom.se/wp-content/uploads/2016/03/HakanHellstrom_foto_EllikaHenrikson_2016_highres_08.jpg"/></div>
          <div className="name">Håkan Hellström</div>
        </div>

			</div>
	    );
  	}
}

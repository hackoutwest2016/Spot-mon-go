import React, { Component } from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import Menu from '../components/menu';
import Challange from '../components/challange';

import Map from '../views/map/index';
import MySpotemon from '../views/my-spotemon/index';
import AllSpotemon from '../views/all-spotemon/index';
import Spotemon from '../views/spotemon/index';
import User from '../views/user/index';
import Spotedex from '../views/spotedex/index';
import Battle from '../views/battle/index';

import style from './main.scss';

export default class App extends Component {
  render() {
    return (
		<Router history={browserHistory}>
			<Route path="/" component={Map} />
			<Route path="my-spotemon" component={MySpotemon} />
			<Route path="spotemon" component={AllSpotemon} />
			<Route path="spotemon/:spotemodId" component={Spotemon} />
			<Route path="user" component={User} />
			<Route path="spotedex" component={Spotedex} />
			<Route path="battle" component={Battle} />
		</Router>
    );
  }
}

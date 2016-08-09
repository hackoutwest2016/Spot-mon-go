import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import Menu from './components/menu';
import Challange from './components/challange';

import App from './views/index';
import Map from './views/map/index';
import MySpotemon from './views/my-spotemon/index';
import AllSpotemon from './views/all-spotemon/index';
import Spotemon from './views/spotemon/index';
import User from './views/user/index';
import Spotedex from './views/spotedex/index';
import Battle from './views/battle/index';

import style from './views/main.scss';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Map} />

			<Route path="my-spotemon" component={MySpotemon} />
			<Route path="spotemon" component={AllSpotemon} />
			<Route path="spotemon/:spotemonId" component={Spotemon} />
			<Route path="user" component={User} />
			<Route path="spotedex" component={Spotedex} />
			<Route path="battle" component={Battle} />
		</Route>
	</Router>
), document.getElementById('root'));

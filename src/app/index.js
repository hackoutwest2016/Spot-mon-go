import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import Menu from './components/menu';
import Challange from './components/challange';

import App from './views';
import Map from './views/map';
import MySpotemon from './views/my-spotemon';
import AllSpotemon from './views/all-spotemon';
import Spotemon from './views/spotemon';
import User from './views/user';
import Spotedex from './views/spotedex';
import Battle from './views/battle';
import Catch from './views/catch';
import Win from './views/win';

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
			<Route path="battle/:userId" component={Battle} />
			<Route path="catch/:spotemonId" component={Catch} />
			<Route path="win" component={Win} />
		</Route>
	</Router>
), document.getElementById('root'));

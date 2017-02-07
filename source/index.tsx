import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import { App, Welcome } from './app';
import { MyFriends } from './friends/myFriends';
import { Profile } from './profile/profile'

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Welcome} />
			<Route path="myfriends" component={MyFriends} />
			<Route path="profile" component={Profile} />
		</Route>
	</Router>,
	document.getElementById('container')
);

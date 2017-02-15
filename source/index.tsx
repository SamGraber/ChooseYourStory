import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import { App, Welcome } from './app';
import { MyFriends } from './friends/myFriends';
import { FindFriends } from './friends/findFriends';
import { Profile } from './profile/profile';
import { Notifications } from './notification/notifications';

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Welcome} />
			<Route path="myfriends" component={MyFriends} />
			<Route path="profile" component={Profile} />
			<Route path="findfriends" component={FindFriends} />
			<Route path="notifications" component={Notifications} />
		</Route>
	</Router>,
	document.getElementById('container')
);

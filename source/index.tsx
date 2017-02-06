import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import { App } from './app';
import { Test } from './test';

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Test} />
		</Route>
	</Router>,
	document.getElementById('container')
);

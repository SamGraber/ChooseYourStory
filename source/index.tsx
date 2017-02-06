import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app';
import { get } from './api/http';

ReactDOM.render(
	<App />,
	document.getElementById('container')
);

get('api/test')
	.then(data => console.log(data));

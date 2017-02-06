import * as React from 'react';

import { Login } from './login/login';

export class App extends React.Component<any, any> {
	render(): any {
		return (
			<div>
				<h1>Hello World!</h1>
				<Login />
			</div>
		);
	}
}
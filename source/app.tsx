import * as React from 'react';

import { Login } from './login/login';
import { get } from './api/http';

export class App extends React.Component<any, any> {
	testApi(): void {
		get('api/test').then(data => console.log(data));
	}
	
	render(): any {
		return (
			<div>
				<h1>Hello World!</h1>
				<Login />
				<button onClick={this.testApi}>Test API</button>
			</div>
		);
	}
}
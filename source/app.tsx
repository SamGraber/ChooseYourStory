import * as React from 'react';
import { Link } from 'react-router';

import { Login } from './login/login';

export class App extends React.Component<any, any> {
	render(): any {
		return (
			<div className="container">
				<h1>Choose your story</h1>
				<ul className="nav nav-tabs">
					<li role="presentation"><Link to="/myfriends">My Friends</Link></li>
					<li role="presentation"><Login /></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

export const Welcome = () => <h3>Welcome to the Choose your story application!</h3>;

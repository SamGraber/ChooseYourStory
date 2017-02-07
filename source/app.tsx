import * as React from 'react';
import { Link } from 'react-router';

import { Login } from './login/login';
import { get } from './api/http';
import { currentUser$, IUser } from './api/user';

export interface IAppState {
	currentUser: IUser
}

export class App extends React.Component<any, IAppState> {
	componentWillMount(): void {
		currentUser$.subscribe(currentUser => this.setState({ currentUser }));
	}

	profile(addons: any): any {
		if (this.state.currentUser) {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li><a href="#">{this.state.currentUser.name}</a></li>
					<li><img className="thumbnail" src={this.state.currentUser.picture} /></li>
					{addons}
				</ul>
			);
		}
		return (
			<ul className="nav navbar-nav navbar-right">
				{addons}
			</ul>
		);
	}
	
	render(): any {
		return (
			<div className="container">
				<nav className="navbar">
					<div className="navbar-header">
						<a className="navbar-brand">Choose your story</a>
					</div>
					<ul className="nav navbar-nav">
						<li><Link to="/myfriends">My Friends</Link></li>
					</ul>
					{this.profile(<li><Login /></li>)}
				</nav>
				{this.props.children}
				<button onClick={() => get('api/users').then(console.log)}>Test</button>
			</div>
		);
	}
}

export const Welcome = () => <h3>Welcome to the Choose your story application!</h3>;

import * as React from 'react';
import { Link } from 'react-router';

import { Login } from './login/login';
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
					<li><Link to="/profile">{this.state.currentUser.name}</Link></li>
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
						<Link className="navbar-brand" to="/">Choose your story</Link>
					</div>
					<ul className="nav navbar-nav">
						<li><Link to="/myfriends">My Friends</Link></li>
						<li><Link to="/findfriends">Find Friends</Link></li>
					</ul>
					{this.profile(<li><Login /></li>)}
				</nav>
				{this.props.children}
			</div>
		);
	}
}

export const Welcome = () => <h3>Welcome to the Choose your story application!</h3>;

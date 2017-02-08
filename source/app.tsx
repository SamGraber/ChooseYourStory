import * as React from 'react';
import { Link } from 'react-router';

import { Login } from './login/login';
import { currentUser$, IUser } from './api/user';
import { watch } from './services/reactHelpers';

export interface IAppState {
	currentUser: IUser
}

export class App extends React.Component<any, IAppState> {
	componentWillMount(): void {
		watch(currentUser$, currentUser => this.setState({ currentUser }), this);
	}

	renderIfLoggedIn(makeElement: { (): any }): any {
		return this.state && this.state.currentUser
			? makeElement()
			: null;
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
					<ul className="nav navbar-nav navbar-right">
						{this.renderIfLoggedIn(() => <li><Link to="/profile">{this.state.currentUser.name}</Link></li>)}
						{this.renderIfLoggedIn(() => <li><img className="thumbnail" src={this.state.currentUser.picture} /></li>)}
						<li><Login /></li>
					</ul>
				</nav>
				{this.props.children}
			</div>
		);
	}
}

export const Welcome = () => <h3>Welcome to the Choose your story application!</h3>;

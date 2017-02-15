import * as React from 'react';
import { Link } from 'react-router';

import { Login } from './login/login';
import { currentUser$, IUser } from './api/user';
import { notifications$, INotification } from './api/notifications';
import { watch } from './services/reactHelpers';

export interface IAppState {
	currentUser: IUser;
	notifications: INotification[];
}

export class App extends React.Component<any, IAppState> {
	componentWillMount(): void {
		watch(currentUser$, currentUser => this.setState({ currentUser }), this);
		watch(notifications$, notifications => this.setState({ notifications }), this);
	}

	renderIfLoggedIn(makeElement: { (): any }): any {
		return this.state && this.state.currentUser
			? makeElement()
			: null;
	}

	notificationActive(): any {
		if (this.state.notifications && this.state.notifications.length) {
			return <span className="notification-active">&#8226;</span>;
		}
		
		return null;
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
						{this.renderIfLoggedIn(() => <li className="nav-notification"><Link to="/notifications"><i className="fa fa-bell"></i>{this.notificationActive()}</Link></li>)}
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

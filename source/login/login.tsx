import * as React from 'react';

import { currentUser$, showLogin, logout } from './lock';

export class Login extends React.Component<any, { loggedIn: boolean }> {
	componentWillMount(): void {
		currentUser$.subscribe(profile => this.setState({ loggedIn: !!profile }));
	}

	render(): any {
		return (
			this.state.loggedIn
			? <a role="button" onClick={logout}>Logout</a>
			: <a role="button" onClick={showLogin}>Login</a>
		);
	}
}

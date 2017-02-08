import * as React from 'react';

import { showLogin, logout } from './lock';
import { currentUser$ } from '../api/user';
import { watch } from '../services/reactHelpers';

export class Login extends React.Component<any, { loggedIn: boolean }> {
	componentWillMount(): void {
		watch(currentUser$, profile => this.setState({ loggedIn: !!profile }), this);
	}

	render(): any {
		return (
			this.state.loggedIn
			? <a role="button" onClick={logout}>Logout</a>
			: <a role="button" onClick={showLogin}>Login</a>
		);
	}
}

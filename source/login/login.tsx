import * as React from 'react';

import { authenticated$, showLogin, logout } from './lock';

export class Login extends React.Component<any, { loggedIn: boolean }> {
	componentWillMount(): void {
		authenticated$.subscribe(authenticated => this.setState({ loggedIn: authenticated }));
	}

	render(): any {
		return (
			this.state.loggedIn
			? <button onClick={logout}>Logout</button>
			: <button onClick={showLogin}>Login</button>
		);
	}
}
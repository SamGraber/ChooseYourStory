import * as React from 'react';

import { authenticated$, showLogin, logout } from './lock';

export class Login extends React.Component<any, { loggedIn: boolean }> {
	componentWillMount(): void {
		authenticated$.subscribe(authenticated => this.setState({ loggedIn: authenticated }));
	}

	render(): any {
		return (
			this.state.loggedIn
			? <button className="btn btn-default" onClick={logout}>Logout</button>
			: <button className="btn btn-default" onClick={showLogin}>Login</button>
		);
	}
}
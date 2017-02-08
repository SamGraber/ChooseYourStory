import * as React from 'react';

import { IUser, currentUser$ } from '../api/user';
import { watch } from '../services/reactHelpers';

export class Profile extends React.Component<any, { currentUser: IUser }> {
	componentWillMount(): void {
		watch(currentUser$, currentUser => this.setState({ currentUser }), this);
	}
	
	render(): any {
		return (
			<div>
				<h2>{this.state.currentUser.name}</h2>
				<img className="profile-pic" src={this.state.currentUser.picture} />
			</div>
		);
	}
}

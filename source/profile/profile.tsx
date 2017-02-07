import * as React from 'react';

import { IUser, currentUser$ } from '../api/user';

export class Profile extends React.Component<any, { currentUser: IUser }> {
	componentWillMount(): void {
		currentUser$.subscribe(currentUser => this.setState({ currentUser }));
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

import * as React from 'react';

import { IUser, getUsers } from '../api/user';

export class FindFriends extends React.Component<any, { users: IUser[] }> {
	componentWillMount(): void {
		getUsers().then(users => this.setState({ users }));
	}

	renderUser(user: IUser): any {
		return (
			<li className="list-group-item">
				{user.name} <img className="list-item-pic pull-right" src={user.picture} />
			</li>
		);
	}
	
	render(): any {
		if (!this.state) {
			return null;
		}
		
		return (
			<ul className="list-group">
				{this.state.users.map(this.renderUser)}
			</ul>
		);
	}
}

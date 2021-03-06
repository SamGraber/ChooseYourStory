import * as React from 'react';

import { IUser, getUsers, currentUser$ } from '../api/user';
import { addFriend } from '../api/notifications';

export class FindFriends extends React.Component<any, { users: IUser[] }> {
	componentWillMount(): void {
		getUsers().then(users => this.setState({ users }));
	}

	addFriend(requestedFriend: IUser): void {
		currentUser$.take(1).switchMap(currentUser => {
			return addFriend(currentUser.oauthId, requestedFriend.oauthId);
		}).subscribe();
	}

	renderUser = (user: IUser): any => {
		return (
			<li className="list-group-item row" key={user.oauthId}>
				<div className="col-xs-3">{user.name}</div>
				<div className="col-xs-5"><button className="btn btn-default btn-xs" onClick={() => this.addFriend(user)}>+ Add Friend</button></div>
				<div className="col-xs-4"><img className="list-item-pic pull-right" src={user.picture} /></div>
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

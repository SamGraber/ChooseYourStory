import * as React from 'react';

import { INotification, notifications$ } from '../api/notifications';
import { watch } from '../services/reactHelpers';

export class Notifications extends React.Component<any, { notifications: INotification[] }> {
	componentWillMount(): void {
		watch(notifications$, notifications => this.setState({ notifications }), this);
	}

	renderNotification(notification: INotification): any {
		return (
			<li className="list-group-item row" key={notification.id}>
				<div className="col-xs-8">{notification.message}</div>
				<div className="col-xs-1"><button className="btn btn-success btn-xs" onClick={() => alert('Not yet supported')}>Accept</button></div>
				<div className="col-xs-3"><button className="btn btn-danger btn-xs" onClick={() => alert('Not yet supported')}>Reject</button></div>
			</li>
		);
	}
	
	render(): any {
		if (!this.state) {
			return null;
		}
		
		return (
			<ul className="list-group">
				{this.state.notifications.map(this.renderNotification)}
			</ul>
		);
	}
}

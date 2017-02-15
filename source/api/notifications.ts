import { Observable } from 'rxjs';

import { get, post } from './http';
import { currentUser$ } from './user';

export const notifications$: Observable<INotification[]> = currentUser$.switchMap(user => {
	if (!user) {
		return Observable.of(null);
	}

	const url = `api/notifications`;
	return get(url, { userId: user.oauthId });
});

export interface INotification {
	id: string;
	userId: string;
	type: number;
	message: string;
	requesterId: number;
}

export function addFriend(userId: string, requestedFriendId: string): Promise<INotification> {
	const url = 'api/friendrequest';
	return post(url, { userId, requestedFriendId });
}

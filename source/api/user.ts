import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { get } from './http';

const _currentUser$ = new BehaviorSubject<IUser>(null);
export const currentUser$ = _currentUser$.asObservable();

export interface IUser {
	oauthId: string;
	name: string;
	picture: string;
	friends: number[];
	stories: number[];
}

export function getProfile(profile: any): Promise<IUser> {
	const profileUrl = `api/profile
				?oauthId=${profile.user_id}
				&name=${profile.name}
				&picture=${profile.picture}`;
	return get(profileUrl);
}

export function getUsers(): Promise<IUser[]> {
	const url = `api/users`;
	return get(url);
}

export function setCurrentUser(user: IUser): void {
	_currentUser$.next(user);
}

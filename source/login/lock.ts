import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { key, authDomain } from '../../config/authConfig';
import { getProfile, IUser } from '../api/user';

declare const Auth0Lock: any;

const _currentUser$ = new BehaviorSubject<IUser>(null);
export const currentUser$ = _currentUser$.asObservable();

const lock = new Auth0Lock(key, authDomain);

if (!!getToken()) {
	const profile = JSON.parse(localStorage.getItem('cys_profile'));
	_currentUser$.next(profile);
}

lock.on('authenticated', function(authResult: { idToken: string }) {
	lock.getProfile(authResult.idToken, function(error: any, profile: any) {
		if (error) {
			console.error('There was a problem with the login:', error);
			return;
		}
		localStorage.setItem('id_token', authResult.idToken);
		getProfile(profile).then(result => {
			console.log(result);
			localStorage.setItem('cys_profile', JSON.stringify(result));
			_currentUser$.next(result);
		});
	});
});

export function showLogin(): void {
	lock.show();
}

export function logout(): void {
	_currentUser$.next(null);
	localStorage.removeItem('id_token');
}

export function getToken(): string {
	return localStorage.getItem('id_token');
}

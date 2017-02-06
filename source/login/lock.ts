import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { key, authDomain } from '../../config/authConfig';

declare const Auth0Lock: any;

const _authenticated$ = new BehaviorSubject<boolean>(!!getToken());
export const authenticated$ = _authenticated$.asObservable();

const lock = new Auth0Lock(key, authDomain);

lock.on('authenticated', function(authResult: { idToken: string }) {
	lock.getProfile(authResult.idToken, function(error: any, profile: any) {
		if (error) {
			console.error('There was a problem with the login:', error);
			return;
		}
		_authenticated$.next(true);
		localStorage.setItem('id_token', authResult.idToken);
	});
});

export function showLogin(): void {
	lock.show();
}

export function logout(): void {
	_authenticated$.next(false);
	localStorage.removeItem('id_token');
}

export function getToken(): string {
	return localStorage.getItem('id_token');
}

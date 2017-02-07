import getBaseUrl from './baseUrl';
import { getToken, showLogin } from '../login/lock';

const baseUrl = getBaseUrl();

export function get<T>(url: string): Promise<T> {
	const request = new Request(baseUrl + url, {
		method: 'GET',
		mode: 'cors',
		headers: makeAuthHeader(),
	});

	return fetch(request).then(onSuccess, onError);
}

export function del(url: string): Promise<void> {
	const request = new Request(baseUrl + url, {
		method: 'DELETE',
		mode: 'cors',
		headers: makeAuthHeader(),
	});

	return fetch(request).then(onSuccess, onError);
}

export function makeAuthHeader(): Headers {
	let headers = new Headers();
	headers.append('authentication', `Bearer ${getToken()}`);
	return headers;
}

function onSuccess(response: any): any {
	if (!response.ok) {
		return onError(response);
	}
	
	return response.json();
}

function onError(error: any): void {
	if (error.status === 401) {
		showLogin();
		return;
	}
	
	console.log(error); // eslint-disable-line no-console
}

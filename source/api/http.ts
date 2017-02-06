import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function get<T>(url: string): Promise<T> {
	return fetch(baseUrl + url).then(onSuccess, onError);
}

export function del(url: string): Promise<void> {
	const request = new Request(baseUrl + url, {
		method: 'DELETE',
	});

	return fetch(request).then(onSuccess, onError);
}

function onSuccess(response: any): any {
	return response.json();
}

function onError(error: any): void {
	console.log(error); // eslint-disable-line no-console
}

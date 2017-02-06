import { get } from './api/http';

console.log('Running');
get('api/test')
	.then(data => console.log(data));

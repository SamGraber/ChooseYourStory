console.log('Running');
fetch('http://localhost:3000/api/test')
	.then(data => data.json())
	.then(data => console.log(data));

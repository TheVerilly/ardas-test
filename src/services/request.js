const domain = 'https://api.themoviedb.org/3';
const apiKey = 'b8dbbef293ad2709649b42f3f365336d';

export const endpoints = {
	getMovies: {
		method: 'GET',
		path: '/discover/movie',
		params: {
			with_original_language: 'en'
		}
	}
};

function createUrl(endpoint, params) {
	const url = new URL(`${domain}${endpoint}?api_key=${apiKey}`);
	Object.keys(params).forEach(item => {
		url.searchParams.append(item, params[item]);
	})
	return url.href;
};

function send({endpoint, params = {}}) {
	return new Promise(resolve => {
		fetch(createUrl(endpoint.path, {...endpoint.params, ...params}), {
			method: endpoint.method
		})
			.then(response => response.json())
			.then(data => resolve(data))
			.catch(error => console.error(error))
	});
};

export default {send, endpoints};

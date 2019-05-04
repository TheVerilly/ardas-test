import request from '../services/request';

export const GET_MOVIES = 'GET_MOVIES';
export const SEARCH = 'SEARCH';

export function search(search) {
	return {
		type: SEARCH,
		search
	};
};

export function getMovies() {
	return request.send({
		endpoint: request.endpoints.getMovies
	}).then(data => ({
		type: GET_MOVIES,
		movies: data.results
	}));
};
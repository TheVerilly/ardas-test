import request from '../services/request';

export const GET_MOVIES = 'GET_MOVIES';
export const OVERWRITE_MOVIES = 'OVERWRITE_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const BIND_SEARCH_FIELD = 'BIND_SEARCH_FIELD';
export const RESET_SEARCH_FIELD = 'RESET_SEARCH_FIELD';
export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
export const RESET_PAGE_COUNTER = 'RESET_PAGE_COUNTER';

const endpoint = request.endpoints

const helpers = {
	getPayload(searchFieldValue, nextPage) {
		let payload = {}
		if (searchFieldValue !== '') {
			payload = {
				endpoint: endpoint.searchMovies,
				params: {
					page: nextPage,
					query: searchFieldValue
				}
			}
		} else {
			payload = {
				endpoint: endpoint.getInitialMovieList,
				params: {
					page: nextPage
				}
			}
		}
		return payload
	}
};

export function bindSearchField(value) {
	return {
		type: BIND_SEARCH_FIELD,
		value
	};
};

export function resetSearch() {
	return dispatch => {
		dispatch({
			type: RESET_SEARCH_FIELD
		})
		dispatch({
			type: RESET_PAGE_COUNTER
		})
		return request.send({
			endpoint: endpoint.getInitialMovieList
		}).then(data => dispatch({
			type: OVERWRITE_MOVIES,
			movies: data.results
		}));
	};
};

export function getInitialMovieList() {
	return request.send({
		endpoint: endpoint.getInitialMovieList
	}).then(data => ({
		type: GET_MOVIES,
		movies: data.results
	}));
};

export function getMoreMovies(nextPage, searchFieldValue) {
	return dispatch => {
		dispatch({
			type: SET_NEXT_PAGE
		})
		return request.send(helpers.getPayload(searchFieldValue, nextPage))
			.then(data => dispatch({
				type: GET_MOVIES,
				movies: data.results
			}));
	};
};

export function search(value) {
	return dispatch => {
		dispatch({
			type: RESET_PAGE_COUNTER
		})
		return request.send({
			endpoint: endpoint.searchMovies,
			params: {
				query: value
			}
		}).then(data => dispatch({
			type: SEARCH_MOVIES,
			movies: data.results
		}));
	};
};
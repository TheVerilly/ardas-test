import {combineReducers} from 'redux';
import {
	GET_MOVIES,
	OVERWRITE_MOVIES,
	SEARCH_MOVIES,
	RESET_SEARCH_FIELD,
	BIND_SEARCH_FIELD,
	SET_NEXT_PAGE,
	RESET_PAGE_COUNTER
}
from './actions';

function movie(state = [], action) {
	switch (action.type) {
		case GET_MOVIES:
			return [...state, ...action.movies];
		case SEARCH_MOVIES:
			return [...action.movies];
		case OVERWRITE_MOVIES:
			return [...action.movies];
		default:
			return state;
	};
};

function pageCounter(state = 2, action) {
	switch (action.type) {
		case SET_NEXT_PAGE:
			return state + 1;
		case RESET_PAGE_COUNTER:
			return 2;
		default:
			return state;
	};
};

function searchField(state = '', action) {
	switch (action.type) {
		case BIND_SEARCH_FIELD:
			return action.value;
		case RESET_SEARCH_FIELD:
			return '';
		default:
			return state;
	};
};


export default combineReducers({
    movie, searchField, pageCounter
});

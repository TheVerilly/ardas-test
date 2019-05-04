import {connect} from 'react-redux';
import MovieList from '../components/MovieList';
import {getMoreMovies} from '../store/actions';

function mapStateToProps(state) {
	return {
		movieList: state.movie,
		nextPage: state.pageCounter,
		searchFieldValue: state.searchField
	};
};

function mapDispatchToProps(dispatch) {
	return {
		onScroll: (nextPage, searchFieldValue) => dispatch(getMoreMovies(nextPage, searchFieldValue)),
	};
};

const movieListContainer = connect(mapStateToProps, mapDispatchToProps);

export default movieListContainer(MovieList);

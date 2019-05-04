import {connect} from 'react-redux';
import MovieList from '../components/MovieList';

function mapStateToProps(state) {
	return {
		movieList: state.movie
	};
};

const movieListContainer = connect(mapStateToProps);

export default movieListContainer(MovieList);
import {connect} from 'react-redux';
import MovieList from '../components/MovieList';

const movieListContainer = connect();

export default movieListContainer(MovieList);
import React from 'react';
import MovieCardDetails from './MovieCardDetails'
import PropTypes from 'prop-types';
import '../assets/css/movie-info.css';

function MovieInfo(props) {
	return (
		<div className="movie-info">
			<div className="movie-info__content">
				<MovieCardDetails {...props.location.state} />
			</div>
		</div>
	);
}

MovieInfo.propTypes = {
	location: PropTypes.object
};

export default MovieInfo;
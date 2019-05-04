import React from 'react';
import '../assets/css/movie-info.css';
import MovieCardDetails from './MovieCardDetails'

function MovieInfo(props) {
	return (
		<div className="movie-info">
			<div className="movie-info__content">
				<MovieCardDetails {...props.location.state} />
			</div>
		</div>
	);
}

export default MovieInfo;
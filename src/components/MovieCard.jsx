import React from 'react';
import Poster from './Poster';
import MovieCardDetails from './MovieCardDetails'
import WrappLink from './WrappLink';
import PropTypes from 'prop-types';

import '../assets/css/movie-card.css';

function MovieCard(props) {
	const detailsInfo = {
		title: props.title,
		releaseDate: props.release_date,
		rating: props.rating,
		overview: props.overview
	}
	return (
		<div className="movie-card">
			<Poster url={props.poster_path} description={props.title} />
			<div>
				<MovieCardDetails {...detailsInfo} shortDescription={true} />
				<WrappLink
					icon="info"
					path="/movie-info"
					class="movie-card__btn-info"
					state={{...detailsInfo}}
				/>
			</div>
		</div>
	)
};

MovieCard.propTypes = {
	title: PropTypes.string,
	release_date: PropTypes.string,
	rating: PropTypes.number,
	overview: PropTypes.string,
};

export default MovieCard;
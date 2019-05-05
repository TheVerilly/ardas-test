import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';
import '../assets/css/movie-card-details.css';

function MovieCardDetails(props) {
	function limitOverview(string) {
		if (props.shortDescription) {
			const limit = 15;
			return `${string.split(' ').filter((item, index) => index < limit).join(' ')}...`;
		} else {
			return string;
		};
	};
	return(
		<div className="movie-card__details">
			<h4 className="details__title">{props.title}</h4>
			<div className="details__metadata">
				<span>Release date: {props.releaseDate}</span> <Rating value={props.rating} />
			</div>
			<p className="details__overview">{limitOverview(props.overview)}</p>
		</div>
	);
};

MovieCardDetails.propTypes = {
	shortDescription: PropTypes.bool,
	title: PropTypes.string,
	releaseDate: PropTypes.string,
	rating: PropTypes.number,
	overview: PropTypes.string
}

export default MovieCardDetails;
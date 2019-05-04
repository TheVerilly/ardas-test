import React from 'react';
import Poster from './Poster';
import WrappLink from './WrappLink';
import Rating from './Rating';
import '../assets/css/movie-card.css';

function MovieCard(props) {
	function limitOverview(string) {
		const limit = 15;
		return `${string.split(' ').filter((item, index) => index < limit).join(' ')}...`;
	};
	return (
		<div className="movie-card">
			<Poster url={props.poster_path} description={props.title} />
			<div className="movie-card__details">
				<h4 className="details__title">{props.title}</h4>
				<WrappLink
					icon="search"
					path="/movie-info"
					class="details__btn-movie-more"
					state={{
						overview: props.overview,
						releaseDate: props.release_date,
					}}
				/>
				<div className="details__metadata">
					<span>Release date: {props.release_date}</span>
					<Rating value={props.rating}/>
				</div>
				<p className="details__overview">{limitOverview(props.overview)}</p>
			</div>
		</div>
	)
};

export default MovieCard;
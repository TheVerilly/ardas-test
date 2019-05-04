import React from 'react';
import MovieCard from './MovieCard';
import '../assets/css/movie-list.css';

function MovieList(props) {
	function handleScroll(event) {
		let element = event.target;
		if (element.scrollHeight - Math.round(element.scrollTop) === element.clientHeight) {
			props.onScroll(props.nextPage, props.searchFieldValue);
		};
	}
	return (
		<div className="movie-list" onScroll={handleScroll}>
			{props.movieList.length === 0
				?
					<p className="movie-list__empty">Movies no found</p>
				:
					props.movieList.map((item, index) => {
						return <MovieCard
							key={index}
							title={item.original_title}
							overview={item.overview}
							release_date={item.release_date}
							poster_path={item.poster_path}
							rating={item.vote_average}
						/>
					})
			}
		</div>
	);
};

export default MovieList;
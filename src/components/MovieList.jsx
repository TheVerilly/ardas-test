import React from 'react';
import MovieCard from './MovieCard';
import '../assets/css/movie-list.css';

function MovieList(props) {
	return (
		<div className="movie-list">
			{props.movieList.map((item, index) => {
				return <MovieCard
					key={index}
					title={item.original_title}
					overview={item.overview}
					release_date={item.release_date}
					poster_path={item.poster_path}
					rating={item.vote_average}
				/>
			})}
		</div>
	);
};

export default MovieList;
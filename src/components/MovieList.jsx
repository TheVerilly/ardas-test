import React from 'react';
import MovieCard from './MovieCard'

function MovieList(props) {
	return (
		<div className="wrapp-movie-card">
			{props.movieList.map((item, index) => {
				return <MovieCard
					key={index}
					title={item.original_title}
					overview={item.overview}
					release_date={item.release_date}
					poster_path={item.poster_path}
				/>
			})}
		</div>
	)
}

export default MovieList;
import React from 'react';

function MovieInfo(props) {
	return (
		<div>
			<p>{props.location.state.overview}</p>
			<p>{props.location.state.releaseDate}</p>
		</div>
	);
}

export default MovieInfo;
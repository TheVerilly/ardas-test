import React from 'react';

function Poster(props) {
	function createUrl() {
		const width = 'w342';
		return `https://image.tmdb.org/t/p/${width}${props.url}`;
	};
	return (
		<img src={createUrl()} alt={props.description} />
	);
};

export default Poster;
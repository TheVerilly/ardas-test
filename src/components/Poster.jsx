import React from 'react';
import PropTypes from 'prop-types';

function Poster(props) {
	function createUrl() {
		const width = 'w342';
		return `https://image.tmdb.org/t/p/${width}${props.url}`;
	};
	return (
		<img src={createUrl()} alt={props.description} />
	);
};

Poster.propTypes = {
	url: PropTypes.string,
	description: PropTypes.string
};

export default Poster;
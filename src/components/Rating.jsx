import React from 'react';
import Icon from './Icon';

function Rating(props) {
	return(
		<span className="rating"><Icon name="star" />{props.value}/10</span>
	);
};

export default Rating;
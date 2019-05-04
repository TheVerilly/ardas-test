import React from 'react';
import Icon from './Icon';

function Rating(props) {
	const defaultStyle = {
		color: '#ff9d00',
		marginRight: '5px'
	}
	return(
		<span><Icon style={defaultStyle} name="star" />{props.value}/10</span>
	);
};

export default Rating;
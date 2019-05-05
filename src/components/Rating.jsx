import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

function Rating(props) {
	const defaultStyle = {
		color: '#ff9d00',
		marginRight: '5px'
	};
	return(
		<span><Icon style={defaultStyle} name="star" />{props.value}/10</span>
	);
};

Rating.propTypes = {
	value: PropTypes.number
};

export default Rating;
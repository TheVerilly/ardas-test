import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
	return(
		<i style={props.style} className={`fas fa-${props.name}`}></i>
	);
}

Icon.propTypes = {
	style: PropTypes.object,
	name: PropTypes.string
};

export default Icon;
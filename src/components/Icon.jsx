import React from 'react';

function Icon(props) {
	return(
		<i className={`fas fa-${props.name}`}></i>
	);
}

export default Icon;
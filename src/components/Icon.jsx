import React from 'react';

function Icon(props) {
	return(
		<i style={props.style} className={`fas fa-${props.name}`}></i>
	);
}

export default Icon;
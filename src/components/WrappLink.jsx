import React from 'react';
import {Link} from "react-router-dom";

function WrappLink(props) {
	return (
		<button className={props.class}>
			<Link to={{pathname: props.path, state: props.state}}>
				{props.title ? <span>{props.title}</span> : <i className={`fas fa-${props.icon}`}></i>}
			</Link>
		</button>
	);
}

export default WrappLink;
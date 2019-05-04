import React from 'react';
import {Link} from "react-router-dom";
import Icon from './Icon';

function WrappLink(props) {
	return (
		<button className={props.class}>
			<Link to={{pathname: props.path, state: props.state}}>
				{props.title ? <span>{props.title}</span> : <Icon name={props.icon} />}
			</Link>
		</button>
	);
}

export default WrappLink;
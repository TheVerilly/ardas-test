import React from 'react';
import {Link} from "react-router-dom";
import Icon from './Icon';

function WrappLink(props) {
	return (
		<Link to={{pathname: props.path, state: props.state}}>
			<button className={props.class}>
				{props.title ? <span>{props.title}</span> : <Icon name={props.icon} />}
			</button>
		</Link>
	);
};

export default WrappLink;
import React from 'react';
import {Link} from "react-router-dom";
import Icon from './Icon';
import PropTypes from 'prop-types';

function WrappLink(props) {
	return (
		<Link to={{pathname: props.path, state: props.state}}>
			<button className={props.class}>
				{props.title ? <span>{props.title}</span> : <Icon name={props.icon} />}
			</button>
		</Link>
	);
};

WrappLink.propTypes = {
	state: PropTypes.object,
	title: PropTypes.string,
	class: PropTypes.string
};

export default WrappLink;
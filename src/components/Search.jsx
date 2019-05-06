import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/search.css';

function Search(props) {
	function runAction(action, payload = null) {
		if (props.value !== '') {
			payload ? action(payload) : action()
		}
	}
	return (
		<div className="wrapp-search">
			<input type="text" onChange={(event) => props.onTyping(event.target.value)} value={props.value} placeholder="search..." />
			<button onClick={() => runAction(props.onSearch, props.value)} className="btn-search btn-search--primary">Search</button>
			<button onClick={() => runAction(props.onReset)} className="btn-search btn-search--reset">Reset</button>
		</div>
	);
};

Search.propTypes = {
	value: PropTypes.string,
	onSearch: PropTypes.func,
	onReset: PropTypes.func,
	onTyping: PropTypes.func
};

export default Search;
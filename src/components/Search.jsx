import React from 'react';
import '../assets/css/search.css';

function Search(props) {
	function runSearch() {
		if (props.value !== '') {
			props.onSearch(props.value)
		}
	}
	return (
		<div className="wrapp-search">
			<input type="text" onChange={(event) => props.onTyping(event.target.value)} value={props.value} placeholder="search..." />
			<button onClick={runSearch} className="btn-search btn-search--primary">Search</button>
			<button onClick={props.onReset} className="btn-search btn-search--reset">Reset</button>
		</div>
	);
};

export default Search;
import React from 'react';
import '../assets/css/search.css';

function Search() {
	return (
		<div className="wrapp-search">
			<input type="text" placeholder="search..." />
			<button className="btn-search btn-search--primary">Search</button>
			<button className="btn-search btn-search--reset">Reset</button>
		</div>
	);
};

export default Search;
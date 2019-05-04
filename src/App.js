import React from 'react';
import './App.css';
import MovieListContainer from './containers/MovieListContainer';
import SearchContainer from './containers/SearchContainer'

function App() {
	return (
		<div>
			<SearchContainer />
			<main>
				<MovieListContainer />
			</main>
		</div>
	);
};

export default App;

import React from 'react';
import './App.css';
import MovieListContainer from './containers/MovieListContainer';
import Search from './components/Search'

function App() {
	return (
		<div className="app">
			<Search />
			<main>
				<MovieListContainer />
			</main>
		</div>
	);
};

export default App;

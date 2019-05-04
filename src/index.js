import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';
import 'reset-css';
import App from './App';
import MovieInfo from './components/MovieInfo'
import {getInitialMovieList} from './store/actions';
import * as serviceWorker from './serviceWorker';
import store from './store/index';

store.dispatch(getInitialMovieList());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter >
			<Route exact path="/" component={App} />
			<Route exact path="/movie-info" component={MovieInfo} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import App from './components/App';
import LogIn from './components/LogIn';
import reducers from './reducers';

const store= createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={LogIn} />
		</Router>
	</Provider>,
	document.getElementById('app')
);
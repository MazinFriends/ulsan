import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import reducers from './reducers';

const store= createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Switch>
				<Route exact path="/" component={LogIn} />
				<Route path="/forgotpassword" component={ForgotPassword} />
				<Route path="/signup" component={SignUp} />
				<Route render={() => {
					return <p>Not found</p>
				}} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('app')
);
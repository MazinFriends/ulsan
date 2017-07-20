import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from '../../dist/panel.less';

import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';

const LogIn = () => (
	<div className="background">
	<div className="center-container">
		<div className="panel">
			<div className="panel-heading">
				<h2>Log In</h2>
			</div>
			<div className="panel-body">
				<form>
					<input type="text" placeholder="Email" name="email" required />
					<input type="password" placeholder="password" name="password" required />
					<input type="submit" className= "panel-button" value="LogIn" />
				</form>
			</div>
		</div>
		<div className="panel-footer">
			<div className="links">
				<div className="link"><Link to="/forgotpassword">Forgot Password</Link></div>
				<div><hr></hr></div>
				<div className="link"><Link to="/signup">Create an account</Link></div>		
			</div>
			<p>By logging in, I certify that I agree with the Terms of Service EULA and Privacy Policy.</p>
		</div>
		</div>
	</div>
)


export default LogIn
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from '../../dist/panel.less';

import ForgotPassword from './ForgotPassword';
import LogIn from './LogIn';

const SignUp = () => (
	<div className="center-container">
		<div className="panel">
			<div className="panel-heading">
				<h2>Sign Up</h2>
			</div>
			<div className="panel-body">
				<form>
					<input type="text" placeholder="Username" name="username" required />
					<input type="text" placeholder="Email" name="email" required />
					<input type="password" placeholder="password" name="password" required />
					<input type="submit" className= "panel-button" value="Sign Up" />
				</form>
			</div>
		</div>
		<div className="panel-footer">
			<div className="links">
				<div className="link"><Link to="/forgotpassword">Forgot Password</Link></div>
				<div><hr></hr></div>
				<div className="link"><Link to="/">Log In</Link></div>		
			</div>
			<p>By logging in, I certify that I agree with the Terms of Service EULA and Privacy Policy.</p>
		</div>
	</div>
	)


export default SignUp;
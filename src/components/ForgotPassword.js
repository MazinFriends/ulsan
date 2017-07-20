import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from '../../dist/panel.less';

import SignUp from './SignUp';
import LogIn from './LogIn';

const ForgotPassword = () => (
	<div className="center-container">
		<div className="panel">
			<div className="panel-heading">
				<h2>Sign Up</h2>
			</div>
			<div className="panel-body">
				<form>
					<label>We will send you an email to reset password</label>
					<input type="text" placeholder="Email" name="email" required />
					<input type="submit" className= "panel-button" value="Send" />
				</form>
			</div>
		</div>
		<div className="panel-footer">
			<div className="links">
				<div className="link"><Link to="/">Log In</Link></div>
				<div><hr></hr></div>
				<div className="link"><Link to="/signup">Create an account</Link></div>		
			</div>
			<p>By logging in, I certify that I agree with the Terms of Service EULA and Privacy Policy.</p>
		</div>
	</div>
)


export default ForgotPassword;
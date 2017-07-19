import React, { Component } from 'react';
import styles from '../../dist/panel.less';

const LogIn = () => (
	<div className="background">
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
	</div>
)


export default LogIn
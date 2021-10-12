import './CSS/Header.css';
import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>User Name</h1>
				<nav>
					<li>
						<p>About</p>
						<i class="fas fa-lightbulb" />
					</li>
					<li>
						<p>Calender</p>
						<i class="far fa-calendar-alt" />
					</li>
					<li>
						<p>Logout</p>
						<i class="fas fa-sign-out-alt" />
					</li>
				</nav>
			</div>
		);
	}
}

export default Header;

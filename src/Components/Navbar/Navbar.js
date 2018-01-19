import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="navbar">
					<div className="row">

						<div className="col s1"></div>

						<div className="col s10 head">
							<span className="title">Brendan</span>
							<img src={logo} className="App-logo"></img>
							<span className="title">Bormann</span>
						</div>

						<div className="col s1"></div>

					</div>
					<nav className="sub-nav hide-on-small-and-down row">
						<div className="col s2"></div>

						<div className="nav-center col s8 nav-wrapper">
							<ul>
								<li><a onClick={() => this.props.pageChanger('Home')}>Home</a></li>
								<li><a onClick={() => this.props.pageChanger('Resume')}>Resume</a></li>
								<li><a onClick={() => this.props.pageChanger('Projects')}>Projects</a></li>
								<li><a onClick={() => this.props.pageChanger('Contact')}>Contact</a></li>
							</ul>
						</div>

						<div className="col s2"></div>
						</nav>
				</div>
			</div>
		);
	}
}

export default Navbar;
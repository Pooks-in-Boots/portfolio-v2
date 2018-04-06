import React, { Component } from 'react';
import logo from '../../logo.png';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="navbar">
					<div className="row">

						<div className="col s1"></div>

						<div className="col s10 head">
							<span className="title animated fadeIn">Brendan</span>
							<img src={logo} className="App-logo" alt="logo"></img>
							<span className="title animated fadeIn">Bormann</span>
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
					<ul id="slide-out" className="side-nav">
						<li>
							<div className="user-view">
								<div className="background">
									<img src="https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="background" />
								</div>
								<span className="white-text name">Brendan Bormann</span>
								<span className="white-text email">brendan.bormann@gmail.com</span>
							</div>
						</li>
						<li><a onClick={() => this.props.pageChanger('Home')}><i className="material-icons">home</i>Home</a></li>
						<li><a onClick={() => this.props.pageChanger('Resume')}><i className="material-icons">layers</i>Resume</a></li>
						<li><a onClick={() => this.props.pageChanger('Projects')}><i className="material-icons">computer</i>Projects</a></li>
						<li><a onClick={() => this.props.pageChanger('Contact')}><i className="material-icons">comment</i>Contact</a></li>
					</ul>
					<a data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>

				</div>
			</div>
		);
	}
}

export default Navbar;
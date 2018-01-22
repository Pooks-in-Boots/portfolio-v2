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
					<ul id="slide-out" class="side-nav">
						<li>
							<div class="user-view">
								<div class="background">
									<img src="https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
								</div>
								<span class="white-text name">Brendan Bormann</span>
								<span class="white-text email">brendan.bormann@gmail.com</span>
							</div>
						</li>
						<li><a onClick={() => this.props.pageChanger('Home')}><i class="material-icons">home</i>Home</a></li>
						<li><a onClick={() => this.props.pageChanger('Resume')}><i class="material-icons">layers</i>Resume</a></li>
						<li><a onClick={() => this.props.pageChanger('Projects')}><i class="material-icons">computer</i>Projects</a></li>
						<li><a onClick={() => this.props.pageChanger('Contact')}><i class="material-icons">comment</i>Contact</a></li>
					</ul>
					<a data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>

				</div>
			</div>
		);
	}
}

export default Navbar;
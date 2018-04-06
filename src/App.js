import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {

	state = {
		currentPage: 'Home',
	}

	stateChanger = (page) => {
		this.setState({"currentPage":page});
	}

	pageChanger = () => {
		if (this.state.currentPage === 'Home') {
			return(
				<div>
					<Main />
				</div>
			);
		} else if (this.state.currentPage === 'Resume') {
			return(
				<div>
					<Resume />
				</div>
			);
		} else if (this.state.currentPage === 'Projects') {
			return(
				<div>
					<Projects />
				</div>
			);
		} else if (this.state.currentPage === 'Contact') {
			return(
				<div>
					<Contact />
				</div>
			);
		} else {
			return(
				<div>
					<Main />
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<Navbar pageChanger={this.stateChanger} />
				<div className="row">
					<div className="col s0 m2 l2"></div>
					<div className="col s12 m8 l8">
						{this.pageChanger()}
					</div>
					<div className="col s0 m2 l2"></div>
				</div>
				<br />
				<br />
				<Footer />
			</div>
		);
	}
}

export default App;

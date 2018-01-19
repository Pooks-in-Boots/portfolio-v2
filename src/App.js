import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import SideBar from './Components/SideBar/SideBar';
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
					<div className="col m1 l1"></div>
					<div className="col m7 l7">
						{this.pageChanger()}
					</div>
					<div className="col m3 l3">
						<SideBar />
					</div>
					<div className="col m1 l1"></div>
				</div>
				<br />
				<br />
				<Footer />
			</div>
		);
	}
}

export default App;

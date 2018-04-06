import React, { Component } from 'react';
import './Main.css';
import universe from '../../Images/universe.png';

class Main extends Component {
	render() {
		return (
			<div className="main-container z-depth-3 animated fadeIn">
				<h2 className="main-title center">Welcome!</h2>
				<br />
				<hr />
				<br />
				<p className="main-text">
				Hello, and welcome! My name is Brendan Bormann.
				I am an avid web developer, and very passionate about programming. Currently, I'm helping teach others to program.
				I am well versed in working with both front-end and back-end technologies, making me an excellent full-stack developer.
				I am actively practicing and refining my skill set, and I am always looking to learn new and more efficient practices.
				I'm currently seeking a new opportunity to put my skills to the test, so please feel free to contact me!
				</p>
				<hr />
				<br />
					<img className="main-img" src={universe} alt="universe" />
				<br />
				<hr />
				<br />
				<p className="main-text">
				Currently, in my free time, I am self-learning and practicing python.
				It's a language I find very interesting, and a door towards a field I am very interested in, machine learning.
				It may be a challenging area of programming, but I am determined to reach my goal and write my own learning programs.
				</p>
			</div>
		);
	}
}

export default Main;
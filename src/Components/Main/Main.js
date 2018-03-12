import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
	render() {
		return (
			<div className="main-container z-depth-3">
				<h2 className="main-title center">Welcome!</h2>
				<hr />
				<br />
					<img className="main-img" src="https://images.pexels.com/photos/287748/pexels-photo-287748.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="lightbulb" />
				<br />
				<hr />
				<br />
				<p className="main-text">
				Hello, and welcome! My name is Brendan Bormann.
				I am an avid web developer. I am passionate about programming and coding, and looking to put my skills to good use.
				I have much training and experience in working with both front-end and back-end technologies, making me an excellent full-stack developer.
				I am actively practicing and refining my skill set, and always looking to learn new and more efficient coding techniques.
				I'm currently seeking a new opportunity to put my skills to the test, so feel free to contact me!
				Check out the other pages! You can read about my skills, my resume, and projects.
				Also, you can send me an email from the contact page!
				</p>
				<br />
				<hr />
				<p className="main-text">
				<br />
				Currently, in my free time, I am working on practicing deep-learning with python.
				It's an area I am very interested in, and have decided to learn on my own time.
				It's a difficult area, but I have taken it upon myself to learn and practice my skills with it.
				</p>
			</div>
		);
	}
}

export default Main;
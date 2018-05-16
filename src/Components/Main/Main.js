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
				Hello! My name is Brendan Bormann.
				<br />
				<br />
				I am an avid web developer, and I am very passionate about programming. Currently, I'm helping teach others to program.
				I am well versed in working with both front-end and back-end technologies, making me an excellent full-stack developer.
				I am an excellent developer with a focus on Node JS. I work mostly on back-end, on routing and servers.
				I'm currently seeking a new opportunity to put my skills to the test, so please feel free to contact me! Contact info can be found on the contact tab.
				<br />
				<br />
				I'm a very laid back person, who is very creative and clever. My biggest selling point is my quick wit! I'm also very
				sociable, and I've found that it's very rare for me to not get along with anyone. I believe many people
				would vouch for me on that.
				</p>
				<hr />
				<br />
					<img className="main-img" src={universe} alt="universe" />
				<br />
				<hr />
				<br />
				<p className="main-text">
				Currently, in my free time, I am delving deeply into Node and working on creating a database system called ThunderDB.
				I am very interested in Node and the deeper mechanics of servers, thread pools, server clustering, benchmarking, and the event loop.
				I strive to one day work exclusively with Node, and I hope to one day contribute my own code into Node.
				<br />
				<br />
				I also spend my free time learning python. I mainly use it for fun, creating bots for various purposes and making simple games.
				I have a lot of fun programming in my own time on personal projects. Programming is very rewarding!
				</p>
			</div>
		);
	}
}

export default Main;
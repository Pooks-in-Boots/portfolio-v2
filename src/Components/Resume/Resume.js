import React, { Component } from 'react';
import './Resume.css';
import javascript from '../../Images/javascript.png';
import TechCard from '../TechCard/TechCard';

import js from '../../Images/js.jpg';
import mongo from '../../Images/mongo.png';
import python from '../../Images/python.png';

class Resume extends Component {
	render() {
		return (
			<div className="resume-container z-depth-3 animated fadeIn">
				<h2 className="main-title center">My Resume</h2>
				<br />
				<hr />
				<br />
                <p className="main-text">
                    I am a fullstack developer currently working as a teacher's assistant for a coding bootcamp. I am very skilled
                    with MERN stack (MongoDB, Express, React, and Node) and I'm a node expert. I have a lot of experience working
                    with the guts of node, whether it's running node clusters, or caching files. I have in-depth knowledge of Node's
                    threading, task scheduling, and event-loop. I am constantly studying, as Node is very interesting to me.
                    <br />
                    <br />
                    I am most passionate about the backend development, but I enjoy working on a full-stack level and have a knack for front-end design.
                    My strongest area is working on complex logic, absract programming, and data manipulation.
                    I actively spend my time challenging myself and pursuing more and more complex and difficult problems.
                    I've always been passionate about problem solving, and have a natural talent for logic, and logical systems.
                    Plus, I'm also a big fan of riddles, so feel free to send me a good one if you think you can trick me!
                    <br />
                    <br />
                    <a className="resume-link" onClick={() => window.open('https://www.codewars.com/users/Pooks', '_blank')}> This site</a> challenges me to compete with others and sharpen my abilies.
                    Below is a my current badge from CodeWars. At the time of writing this, I am in the 95th percentile of their user base.
                    <br />
                    <br />
                    <img className="code-wars" src="https://www.codewars.com/users/Pooks/badges/large" alt="codewars badge" />
				</p>
                <hr />
                <br />
				<img className="main-img" src={javascript} alt="code" />
                <br />
                <hr />
                <br />
                <div className="row">
                    <TechCard image={js} name="JavaScript"/>
                    <TechCard image={python} name="python"/>
                    <TechCard image={mongo} name="mongo"/>
                </div>
                <br />
                <hr />
                <br />
                <p className="main-text">
                    Here are many of the areas I have experience in. Things written in bold are things I use the most. 
                    Keep in mind, this list is just to give you an idea of my skills, not to list of every single tech or language I'm familiar with.
                    As mentioned above, my strongest areas are Node, React, Express, and MongoDB.
                </p>
                <br />
                <br/>
                <div className="row">
                    <div className="col s5 m5">
                        <h4 className="main-title resume-title center">Languages</h4>
                        <hr />
                        <ul className="resume-list">
                            <li><b>JavaScript</b></li>
                            <li>RegEx</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="col s2 m2"></div>
                    <div className="col s5 m5">
                        <h4 className="main-title resume-title center">Tools</h4>
                        <hr />
                        <ul className="resume-list">
                            <li><b>Node</b></li>
                            <li>Apache Benchmark</li>
                            <li>Git</li>
                            <li>Cheerio</li>
                            <li>Mocha</li>
                            <li>Chai</li>
                            <li>Nightmare</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col s5 m5">
                        <h4 className="main-title resume-title center">Node Modules</h4>
                        <hr />
                        <ul className="resume-list">
                            <li><b>Express</b></li>
                            <li>Redis</li>
                            <li>PM2</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>Axios</li>
                            <li>Chalk</li>
                        </ul>
                    </div>
                    <div className="col s2 m2"></div>
                    <div className="col s5 m5">
                        <h4 className="main-title resume-title center">Frameworks</h4>
                        <hr />
                        <ul className="resume-list">
                            <li><b>React</b></li>
                            <li>Vue</li>
                            <li>Meteor</li>
                            <li>Electron</li>
                            <li>Blessed-CLIs</li>
                            <li>TDD Tools</li>
                            <li>And more...</li>
                        </ul>
                    </div>
                </div>

                <div className="row"></div>
			</div>
		);
	}
}

export default Resume;
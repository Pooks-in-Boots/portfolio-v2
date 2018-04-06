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
                    I have learned many different languages and frameworks!
                    My most refined set is JavaScript, while using Express and React.
                    While I love JavaScript, I have become extremely passionate about Python since I picked it up.
                    I have also been debating wether or not to learn C++ aswell.
                    <br />
                    <br />
                    I am most passionate about the backend development, but I enjoy working on a full-stack level and have a knack for front-end design.
                    My strongest area is working on complex logic, absract programming, and data manipulation.
                    I actively spend my time challenging myself and pursuing more and more complex and difficult problems.
                    I've always been passionate about problem solving, and have a natural talent for logic, and logical systems.
                    <a className="resume-link" onClick={() => window.open('https://www.codewars.com/users/Pooks', '_blank')}>This site</a> challenges me to compete with others and sharpen my abilies.
                    Below is a my current badge from CodeWars.
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
                <div className="row">
                    <div className="col s5 m5">
                        <h4 className="main-title resume-title center">Languages & Technologies</h4>
                        <ul className="resume-list">
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Node</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Git</li>
                            <li>REST APIs</li>
                            <li>And more...</li>
                        </ul>
                    </div>
                    <div className="col s2 m2"></div>
                    <div className="col s5 m5">
                        <h4 className="main-title resume-title center">Frameworks & Packages</h4>
                        <ul className="resume-list">
                            <li>React</li>
                            <li>Express</li>
                            <li>JQuery</li>
                            <li>Cheerio</li>
                            <li>Mocha</li>
                            <li>Chai</li>
                            <li>Nightmare</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>Axios</li>
                            <li>Async</li>
                            <li>Chalk</li>
                            <li>And more...</li>
                        </ul>
                    </div>
                </div>
			</div>
		);
	}
}

export default Resume;
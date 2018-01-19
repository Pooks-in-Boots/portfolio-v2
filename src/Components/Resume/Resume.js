import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
	render() {
		return (
			<div className="resume-container z-depth-3">
				<h2 className="main-title center">My Resume</h2>
                <hr />
                <br />
				<img className="main-img" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="code" />
				<p className="main-text">
                    I have learned many different languages and frameworks.
                    My most refined skills are with JavaScript, using Express and React.
                    I am most passionate about the backend development, but I enjoy working on a full-stack level.
                    My strongest suit is working on complex logic and data manipulation.
                    I actively spend my time challenging myself and pursuing more and more complex and difficult problems.
                    I've always been passionate about problem solving, and have a natural talent for logic, and logical systems.
                    <a className="resume-link" onClick={() => window.open('https://www.codewars.com/users/Pooks', '_blank')}>This site</a> allows me to compete with others and refine my abilies.
				</p>
                <hr />
                <div className="row">
                    <div className="col s1"></div>
                    <div className="col s5">
                        <h4 className="main-title center">Languages & Technologies</h4>
                        <ul className="resume-list">
                            <li>JavaScript</li>
                            <li>Node</li>
                            <li>Hyper-Text Markup Language</li>
                            <li>Cascading Style Sheets</li>
                            <li>Python</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>And more...</li>
                        </ul>
                    </div>
                    <div className="col s5">
                        <h4 className="main-title center">Frameworks & Packages</h4>
                        <ul className="resume-list">
                            <li>React</li>
                            <li>Express</li>
                            <li>JQuery</li>
                            <li>Cheerio</li>
                            <li>Mocha</li>
                            <li>Chai</li>
                            <li>Nightmare</li>
                            <li>And more...</li>
                        </ul>
                    </div>
                    <div className="col s1"></div>
                </div>
			</div>
		);
	}
}

export default Resume;
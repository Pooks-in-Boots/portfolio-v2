import React, { Component } from 'react';
import './Projects.css';
import projects from '../../Images/projects.png';

class Projects extends Component {
    render() {
        return (
            <div className="projects-container z-depth-3 animated fadeIn">
                <h2 className="main-title center">My Projects</h2>
                <br />
				<hr />
				<br />
                <p className="main-text">
                    Throughout my time creating and maintaining projects, I've learned quite a bit!
                    I've tried building many different applications, and have used many different technologies.
                    I really enjoy learning by experience, and building an application that I am proud of.
                    I have slowed down on my projects as my free time has been reduced, but that doesn't mean I'm slacking!
                    <br />
                    <br />
                    Anyway, below is a collection of some of my projects, but feel free to browse my github and check out the code.
                    Bare in mind, that some of my projects has not aged well, and I cannot keep up with so many!
                    <br />
                    I've included several projects, included with links and brief descriptions of their functionality.
                </p>
                <hr />
                <br />
                <img className="main-img" src={projects} alt="projects" />
                <br />
                <hr />
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <h4 className="main-title center">Project List</h4>
                        <ul className="projects-list">
                            <hr />
                            <li>
                                <h5 className="project-title">
                                    Python MasterMind
                                </h5>
                                <p>
                                    A quick and easy game I made in an afternoon. I made it practice python, but my friends and I ended up really enjoying this game.
                                </p>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://repl.it/repls/CavernousCriminalSampler', '_blank')}>Check it out</a>
                                <span> </span>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://github.com/Pooks-in-Boots/python-mastermind', '_blank')}>GitHub Repo</a>
                            </li>
                            <br />
                            <hr />
                            <li>
                                <h5 className="project-title">
                                    Project Octothorpe
                                </h5>
                                <p>
                                    A group project designed to help us and our classmates to review our lessons, and take notes to keep track of concepts covered in class.
                                </p>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://afternoon-tor-12706.herokuapp.com/', '_blank')}>Check it out</a>
                                <span> </span>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://github.com/JaronGallo/Octothorpe_v2', '_blank')}>GitHub Repo</a>
                            </li>
                            <br />
                            <hr />

                            <li>
                                <h5 className="project-title">
                                    React Memory Game
                                </h5>
                                <p>
                                    A simple memory game made using React.js to demonstrate the use of state changes and re-rendering of components.
                                </p>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://pooks-in-boots.github.io/memory-game/', '_blank')}>Check it out</a>
                                <span> </span>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://github.com/Pooks-in-Boots/memory-game', '_blank')}>GitHub Repo</a>
                            </li>
                            <br />
                            <hr />

                            <li>
                                <h5 className="project-title">
                                    Burger Tracker
                                </h5>
                                <p>
                                    A simple app made to use MongoDB to track and maintain your diet. This mirrors an actually dietary application, to serve as a learning experience as to what goes into such a program.
                                </p>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://pacific-river-48040.herokuapp.com/', '_blank')}>Check it out</a>
                                <span> </span>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://github.com/Pooks-in-Boots/Burger', '_blank')}>GitHub Repo</a>
                            </li>
                            <br />
                            <hr />

                            <li>
                                <h5 className="project-title">
                                    Friend Finder
                                </h5>
                                <p>
                                    This project was made to demonstrate the popular dating applications. It allows the user to fill out a breif survey and find a friend with similar tastes. It uses a MySQL database to maintain and track users.
                                </p>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://frozen-journey-42144.herokuapp.com/', '_blank')}>Check it out</a>
                                <span> </span>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://github.com/Pooks-in-Boots/FriendFinder', '_blank')}>GitHub Repo</a>
                            </li>
                            <br />
                            <hr />

                            <li>
                                <h5 className="project-title">
                                    Gif-tastic
                                </h5>
                                <p>
                                    One of my first web applications. It's purpose here is to show how far I've come in my learning process. This was a lesson to create a site using a very simple API.
                                </p>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://pooks-in-boots.github.io/Gif-Tastic/', '_blank')}>Check it out</a>
                                <span> </span>
                                <a className="green lighten-1 waves-effect waves-light btn" onClick={() => window.open('https://github.com/Pooks-in-Boots/Gif-Tastic', '_blank')}>GitHub Repo</a>
                            </li>
                            <br />
                            <hr />

                            <li>You can view many more by visiting my <span className="underline" onClick={() => window.open('https://github.com/Pooks-in-Boots', '_blank')}>Github profile.</span></li>
                        </ul>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
        );
    }
}

export default Projects;
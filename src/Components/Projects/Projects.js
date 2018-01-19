import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="projects-container z-depth-3">
                <h2 className="main-title center">My Projects</h2>
                <hr />
                <br />
                <img className="main-img" src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="code" />
                <p className="main-text">
                    Throughout my time as a web developer, I have created several sites, and applications.
                    I've used many different languages, frameworks, and technologies.
                    My goal with these sites, is to learn from others work, and create new and innovative solutions to simple problems.
                    I have done several projects as a learning experience.
                    These experiences are used to practice the concept behind these technologies and allow me to fully understand the depth and uses of them.
                    <br />
                    I've included several projects, included with links and breif descriptions of their functionality.
                </p>
                <hr />
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <h4 className="main-title center">Project List</h4>
                        <ul className="projects-list">
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
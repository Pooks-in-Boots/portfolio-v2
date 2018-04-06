import React, {Component} from 'react';
import './Footer.css';
import github from '../../Images/github-128.png';
import linkedin from '../../Images/linkedin-128.png';
import codewars from '../../Images/codewars.png';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="row">
                    <div className="center footer-container">
                        <div className="footer-links">
                            <span
                                className="social"
                                onClick={() => window.open('https://github.com/Pooks-in-Boots', '_blank')}>
                                <p className="social-text">Github</p>
                                <img
                                    className="social-img"
                                    src={github}
                                    alt="Github"
                                    onClick={() => window.open('https://github.com/Pooks-in-Boots', '_blank')}/>
                            </span>
                            <span
                                className="social"
                                onClick={() => window.open('https://www.linkedin.com/in/brendan-bormann-367136145/', '_blank')}>
                                <p className="social-text">Linkedin</p>
                                <img
                                    className="social-img"
                                    src={linkedin}
                                    alt="Linkedin"
                                    onClick={() => window.open('https://www.linkedin.com/in/brendan-bormann-367136145/', '_blank')}/>
                            </span>
                            <span className="social">
                                <p className="social-text">CodeWars</p>
                                <img
                                    className="social-img"
                                    src={codewars}
                                    alt="codewars"
                                    onClick={() => window.open('https://www.codewars.com/users/Pooks', '_blank')}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="footer-copyright">
                        <div className="container center">
                            <p>
                                Made by Brendan Bormann. © 2018 
                                <a className="footer-link" onClick={() => window.open('https://github.com/Pooks-in-Boots/portfolio-v2', '_blank')}>GitHub Repo</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
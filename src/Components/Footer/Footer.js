import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container center">
                        <span> Made entirely from scratch by Brendan Bormann. © 2018</span>
                        <a onClick={() => window.open('https://github.com/Pooks-in-Boots/portfolio-v2', '_blank')}> GitHub Repo</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
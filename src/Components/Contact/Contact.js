import React, { Component } from 'react';
import './Contact.css';
import contact from '../../Images/contact.jpeg';

class Contact extends Component {
	render() {
		return (
			<div className="contact-container z-depth-3 animated fadeIn">
				<h2 className="main-title center">Contact Me</h2>
				<br />
				<hr />
				<br />
                <p className="main-text">
                I appreciate your time spent on my site. 
                If you would like to talk more, or have questions regarding my experience, please contact me.
                Additionally, if you have any comments, questions, or concerns, I would love to hear from you.
                Feel free to use the form below, or email me at <code>brendan.bormann@gmail.com</code>
				</p>
                <hr />
                <br />
				<img className="main-img" src={contact} alt="code" />
                <br />
                <br />
                <hr />
                <br />
                <div className="row contact-box">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <form action="https://formspree.io/brendan.bormann@gmail.com" method="POST">
                            <input placeholder="Your Email" id="email-field" name="Users Email" type="email" className="validate" />
                            <textarea placeholder="Message" id="textarea" className="materialize-textarea" name="Message"></textarea>
                            <input className="grey darken-3 btn waves-effect waves-light" type="submit" value="Send" />
                        </form>
                    </div>
                    <div className="col s2"></div>
                </div>
			</div>
		);
	}
}

export default Contact;
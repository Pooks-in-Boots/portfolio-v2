import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div className="contact-container z-depth-3">
				<h2 className="main-title center">Contact Me</h2>
                <hr />
                <br />
				<img className="main-img" src="https://images.pexels.com/photos/211290/pexels-photo-211290.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="code" />
				<p className="main-text">
                    I appreicate your time spent reading about me, my projects, and my passion.
                    If you would like to talk more, or have questions regarding my experience, please contact me.
                    Additionaly, if you have any comments, questions, or concerns, I would love to hear from you.
                    Below is a form which is directly linked with my email address.
                    Please include an email, so I can get back to you!
				</p>
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
                            <input className="brown lighten-1 btn waves-effect waves-light" type="submit" value="Send" />
                        </form>
                    </div>
                    <div className="col s2"></div>
                </div>
			</div>
		);
	}
}

export default Contact;
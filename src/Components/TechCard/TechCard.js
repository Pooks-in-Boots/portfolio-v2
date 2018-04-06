import React, { Component } from 'react';
import './TechCard.css';

class Resume extends Component {
	render() {
		return (
            <div className="tech-card">
                <img className="tech-card-img" src={this.props.image} alt={this.props.name} />
            </div>
        );
	}
}

export default Resume;
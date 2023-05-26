import React, { Component } from 'react';
import './styles/SkillCard.css';

class SkillCard extends Component {
	state = {};
	render() {
		const { title, onDelete } = this.props;
		return (
			<div className="skill-card">
				<span>{title}</span>
				<button onClick={() => onDelete()}>delete</button>
			</div>
		);
	}
}

export default SkillCard;

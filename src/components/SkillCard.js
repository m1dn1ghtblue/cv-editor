import React from 'react';
import './styles/SkillCard.css';

function SkillCard({ skill, onDelete }) {
	return (
		<div className="skill-card">
			<span>{skill.title}</span>
			<button onClick={() => onDelete()}>delete</button>
		</div>
	);
}

export default SkillCard;

import React from 'react';
import './styles/SkillCard.css';

function SkillCard({ title, onDelete }) {
	return (
		<div className="skill-card">
			<span>{title}</span>
			<button onClick={() => onDelete()}>delete</button>
		</div>
	);
}

export default SkillCard;

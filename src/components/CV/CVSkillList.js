import React from 'react';
import '../styles/CV/CVSkillList.css';

export default function CVSkillList({ skills }) {
	return (
		<div className="skill-list">
			<span className="skills-header">Skills</span>
			{skills.map((skill) => (
				<span className="skill">{skill.title}</span>
			))}
		</div>
	);
}

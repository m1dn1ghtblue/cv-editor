import React, { useState } from 'react';
import './styles/SkillForm.css';
import Skill from '../CVdata/Skill.js';

function SkillForm({ onSubmit }) {
	const [currentSkill, setCurrentSkill] = useState(new Skill());

	const onButtonClick = (e) => {
		e.preventDefault();
		if (currentSkill.title.length > 0) {
			onSubmit(currentSkill);
			setCurrentSkill(new Skill());
		}
	};

	const onChange = (value) => {
		setCurrentSkill({
			...currentSkill,
			title: value,
		});
	};

	return (
		<form className="skill-form">
			<label htmlFor="skill-input">
				Skill:
				<input
					id="skill-input"
					value={currentSkill.title}
					onChange={(e) => onChange(e.target.value)}
					autoComplete="off"
					maxLength={64}
				></input>
			</label>
			<button onClick={onButtonClick}>Add</button>
		</form>
	);
}

export default SkillForm;

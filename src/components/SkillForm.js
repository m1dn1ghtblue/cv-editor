import React from 'react';
import './styles/SkillForm.css';

function SkillForm() {
	return (
		<form className="skill-form">
			<label htmlFor="skill-input">
				Skill:
				<input id="skill-input"></input>
			</label>
			<button>Add</button>
		</form>
	);
}

export default SkillForm;

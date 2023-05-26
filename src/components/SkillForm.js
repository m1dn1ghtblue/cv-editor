import React, { Component } from 'react';
import './styles/SkillForm.css';

class SkillForm extends Component {
	state = {};
	render() {
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
}

export default SkillForm;

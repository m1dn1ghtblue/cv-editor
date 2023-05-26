import React, { Component } from 'react';
import './styles/EducationForm.css';

class EducationForm extends Component {
	state = {};
	render() {
		return (
			<form className="education-form">
				<label htmlFor="school-name-input" id="school-name">
					School name
					<input id="school-name-input"></input>
				</label>
				<label htmlFor="school-location-input" id="school-location">
					Location
					<input id="school-location-input"></input>
				</label>
				<label htmlFor="school-qualification-input" id="school-qualification">
					Qualification
					<input id="school-qualification-input" list="qualification-list"></input>
					<datalist id="qualification-list">
						<option value="High School Diploma" />
						<option value="Bachelor of Arts" />
						<option value="Bachelor of Science" />
						<option value="Master of Arts" />
						<option value="Master of Science" />
						<option value="M.D." />
						<option value="Ph.D" />
						<option value="Bachelor of Arts" />
					</datalist>
				</label>
				<label htmlFor="school-field-of-study-input" id="school-field-of-study">
					Field of study
					<input id="school-field-of-study-input"></input>
				</label>
				<label htmlFor="school-start-date-input" id="school-start-date">
					Graduation start date
					<input id="school-start-date-input" type="date"></input>
				</label>
				<label htmlFor="school-end-date-input" id="school-end-date">
					Graduation end date
					<input id="school-end-date-input" type="date"></input>
					<label htmlFor="school-currently-checkbox" id="currently">
						<input id="school-currently-checkbox" type="checkbox"></input>I currently attend here
					</label>
				</label>

				<button id="add-school-btn">Add</button>
			</form>
		);
	}
}

export default EducationForm;

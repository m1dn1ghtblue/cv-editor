import React from 'react';
import './styles/WorkExperienceForm.css';

function WorkExperienceForm() {
	return (
		<form className="work-form">
			<label htmlFor="work-title-input" id="work-title">
				Job title
				<input id="work-title-input"></input>
			</label>
			<label htmlFor="work-employer-input" id="work-employer">
				Employer
				<input id="work-employer-input"></input>
			</label>
			<label htmlFor="work-location-input" id="work-location">
				Location
				<input id="work-location-input"></input>
			</label>
			<label htmlFor="work-date-start-input" id="work-start-date">
				Start date
				<input id="work-start-input" type="date"></input>
			</label>
			<label htmlFor="work-end-start-input" id="work-end-date">
				End date
				<input id="work-end-input" type="date"></input>
				<label>
					<input type="checkbox"></input>I currently work here
				</label>
			</label>
			<button>Add</button>
		</form>
	);
}

export default WorkExperienceForm;

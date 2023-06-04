import React from 'react';
import './styles/WorkExperienceForm.css';
import WorkExperience from '../CVdata/WorkExperience';

function WorkExperienceForm({ currentWork, setCurrentWork, onSubmit }) {
	const onButtonClick = (e) => {
		e.preventDefault();
		onSubmit(currentWork);
		setCurrentWork(new WorkExperience());
	};

	const onChange = (key, value) => {
		setCurrentWork({
			...currentWork,
			[`${key}`]: value,
		});
	};

	return (
		<form className="work-form">
			<label htmlFor="work-title-input" id="work-title">
				Job title
				<input
					id="work-title-input"
					value={currentWork.jobTitle}
					onChange={(e) => onChange('jobTitle', e.target.value)}
				></input>
			</label>
			<label htmlFor="work-employer-input" id="work-employer">
				Employer
				<input
					id="work-employer-input"
					value={currentWork.employer}
					onChange={(e) => onChange('employer', e.target.value)}
				></input>
			</label>
			<label htmlFor="work-location-input" id="work-location">
				Location
				<input
					id="work-location-input"
					value={currentWork.location}
					onChange={(e) => onChange('location', e.target.value)}
				></input>
			</label>
			<label htmlFor="work-date-start-input" id="work-start-date">
				Start date
				<input
					id="work-start-input"
					type="date"
					value={currentWork.startDate}
					onChange={(e) => onChange('startDate', e.target.value)}
				></input>
			</label>
			<label htmlFor="work-end-start-input" id="work-end-date">
				End date
				<input
					id="work-end-input"
					type="date"
					value={currentWork.endDate}
					onChange={(e) => onChange('endDate', e.target.value)}
					disabled={currentWork.currently}
				></input>
				<label>
					<input
						type="checkbox"
						checked={currentWork.currently}
						onChange={() => {
							onChange('currently', !currentWork.currently);
						}}
					></input>
					I currently work here
				</label>
			</label>
			<label htmlFor="work-description-input" id="work-description">
				Add a short description of your job here
				<textarea
					id="work-description-input"
					value={currentWork.description}
					onChange={(e) => onChange('description', e.target.value)}
				/>
			</label>
			<button onClick={onButtonClick}>Submit</button>
		</form>
	);
}

export default WorkExperienceForm;

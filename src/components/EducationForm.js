import React, { useContext, useState } from 'react';
import './styles/EducationForm.css';
import CVContext from '../CVContext';
import Education from '../CVdata/Education';

function EducationForm() {
	const { education, setEducation } = useContext(CVContext);
	const [currentEducation, setCurrentEducation] = useState(new Education());

	const onButtonClick = (e) => {
		e.preventDefault();
		addEducation(currentEducation);
		setCurrentEducation(new Education());
	};

	const addEducation = (element) => {
		setEducation([...education, element]);
	};

	const onChange = (key, value) => {
		console.log(`setting ${key} to ${value}`);

		setCurrentEducation({
			...currentEducation,
			[`${key}`]: value,
		});
	};

	return (
		<form className="education-form">
			<label htmlFor="school-name-input" id="school-name">
				School name
				<input
					id="school-name-input"
					value={currentEducation.schoolName}
					onChange={(e) => onChange('schoolName', e.target.value)}
				></input>
			</label>
			<label htmlFor="school-location-input" id="school-location">
				Location
				<input
					id="school-location-input"
					value={currentEducation.location}
					onChange={(e) => onChange('location', e.target.value)}
				></input>
			</label>
			<label htmlFor="school-qualification-input" id="school-qualification">
				Qualification
				<input
					id="school-qualification-input"
					list="qualification-list"
					value={currentEducation.quailification}
					onChange={(e) => onChange('qualification', e.target.value)}
				></input>
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
				<input
					id="school-field-of-study-input"
					value={currentEducation.fieldOfStudy}
					onChange={(e) => onChange('fieldOfStudy', e.target.value)}
				></input>
			</label>
			<label htmlFor="school-start-date-input" id="school-start-date">
				Graduation start date
				<input
					id="school-start-date-input"
					type="date"
					value={currentEducation.startDate}
					onChange={(e) => onChange('startDate', e.target.value)}
				></input>
			</label>
			<label htmlFor="school-end-date-input" id="school-end-date">
				Graduation end date
				<input
					id="school-end-date-input"
					type="date"
					value={currentEducation.endDate}
					onChange={(e) => onChange('endDate', e.target.value)}
					disabled={currentEducation.currently}
				></input>
				<label>
					<input
						type="checkbox"
						checked={currentEducation.currently}
						onChange={() => {
							onChange('currently', !currentEducation.currently);
						}}
					></input>
					I currently attend here
				</label>
			</label>

			<button onClick={onButtonClick}>Add</button>
		</form>
	);
}

export default EducationForm;

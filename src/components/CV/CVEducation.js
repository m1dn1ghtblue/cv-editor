import React from 'react';
import CVEducationCard from './CVEducationCard.js';
import '../styles/CV/CVEducation.css';

export default function CVEducation({ educationList }) {
	return (
		<div className="cv-education">
			<h3 className="cv-section-header">Education</h3>
			<div className="education-list">
				{educationList.map((education) => (
					<CVEducationCard education={education} />
				))}
			</div>
		</div>
	);
}

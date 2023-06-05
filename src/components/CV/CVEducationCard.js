import React from 'react';
import '../styles/CV/CVCard.css';

export default function CVEducationCard({ education }) {
	return (
		<div className="cv-card">
			<span className="period">
				{education.startDate.slice(0, 4)} - {education.currently ? 'Present' : education.endDate.slice(0, 4)}
			</span>
			<div className="content">
				<h4 className="title">
					{education.qualification} - {education.fieldOfStudy}
				</h4>
				<h5 className="details">
					{education.schoolName} / {education.location}
				</h5>
			</div>
		</div>
	);
}

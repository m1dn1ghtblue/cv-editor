import React from 'react';
import './styles/Card.css';

export default function EducationCard({ education, onDelete, onEdit }) {
	return (
		<div className="education-card">
			<h3>{education.qualififaction}</h3>
			<h4>
				{education.schoolName}, {education.location}
			</h4>
			<p>
				{education.startDate} - {education.currently ? 'current' : education.endDate}
			</p>

			<button onClick={onDelete}>delete</button>
			<button onClick={onEdit}>edit</button>
		</div>
	);
}

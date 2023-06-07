import React from 'react';
import './styles/Card.css';

export default function EducationCard({ education, onDelete, onEdit }) {
	return (
		<div className="card">
			<div className="content">
				<h3>
					{education.qualification} - {education.fieldOfStudy}
				</h3>
				<h4>
					{education.schoolName}, {education.location}
				</h4>
				<p>
					{education.startDate} - {education.currently ? 'current' : education.endDate}
				</p>
			</div>
			<div className="buttons">
				<button onClick={onDelete}>delete</button>
				<button onClick={onEdit}>edit</button>
			</div>
		</div>
	);
}

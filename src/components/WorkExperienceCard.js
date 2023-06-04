import React from 'react';
import './styles/WorkExperienceCard.css';

export default function WorkExperienceCard({ workExperience, onDelete, onEdit }) {
	return (
		<div className="work-experience-card">
			<h3>{workExperience.jobTitle}</h3>
			<h4>
				{workExperience.employer} - {workExperience.location}
			</h4>
			<p>
				{workExperience.startDate} - {workExperience.currently ? 'currently' : workExperience.endDate}
			</p>
			<p>{workExperience.description}</p>
			<button onClick={onDelete}>delete</button>
			<button onClick={onEdit}>edit</button>
		</div>
	);
}

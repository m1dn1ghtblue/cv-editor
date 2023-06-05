import React from 'react';
import '../styles/CV/CVCard.css';

export default function CVWorkCard({ work }) {
	return (
		<div className="cv-card">
			<span className="period">
				{work.startDate.slice(0, 4)} - {work.currently ? 'Present' : work.endDate.slice(0, 4)}
			</span>
			<div className="content">
				<h4 className="title">{work.jobTitle}</h4>
				<h5 className="details">
					{work.employer} / {work.location}
				</h5>
				<p className="description">{work.description}</p>
			</div>
		</div>
	);
}

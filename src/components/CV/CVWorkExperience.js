import React from 'react';
import CVWorkCard from './CVWorkCard';
import '../styles/CV/CVWorkExperience.css';

export default function CVWorkExperience({ workList }) {
	return (
		<div className="cv-work-experience">
			<h3 className="cv-section-header">Work experience</h3>
			<div className="work-list">
				{workList.map((work) => (
					<CVWorkCard key={`cv-card-${work.id}`} work={work} />
				))}
			</div>
		</div>
	);
}

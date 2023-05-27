import React, { useContext } from 'react';
import './styles/EducationTabContent.css';
import EducationForm from './EducationForm';
import EducationCard from './EducationCard';
import CVContext from '../CVContext';

function EducationTabContent() {
	const { education } = useContext(CVContext);

	const cards = education.map((element) => (
		<EducationCard key={element.id} education={element} onDelete={() => {}}></EducationCard>
	));

	return (
		<div className="tab-content education-tab">
			<EducationForm />
			{cards}
		</div>
	);
}

export default EducationTabContent;

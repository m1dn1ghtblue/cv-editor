import React, { useContext } from 'react';
import './styles/EducationTabContent.css';
import EducationForm from './EducationForm';
import EducationCard from './EducationCard';
import CVContext from '../CVContext';
function EducationTabContent() {
	const { education, deleteEducation } = useContext(CVContext);

	const cards = education.map((element) => (
		<EducationCard
			// TODO rename component keys
			key={`educationCardKey_${element.id}`}
			education={element}
			onDelete={() => {
				deleteEducation(element.id);
			}}
		></EducationCard>
	));

	return (
		<div className="tab-content education-tab">
			<EducationForm />
			{cards}
		</div>
	);
}

export default EducationTabContent;

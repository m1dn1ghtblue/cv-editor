import React, { useContext, useState } from 'react';
import './styles/EducationTabContent.css';
import EducationForm from './EducationForm';
import EducationCard from './EducationCard';
import CVContext from '../CVContext';
import Education from '../CVdata/Education';

function EducationTabContent() {
	const { education, deleteEducation } = useContext(CVContext);
	const [currentEducation, setCurrentEducation] = useState(new Education());

	const cards = education.map((element) => (
		<EducationCard
			// TODO rename component keys
			key={`educationCardKey_${element.id}`}
			education={element}
			onDelete={() => {
				deleteEducation(element.id);
			}}
			onEdit={() => {
				setCurrentEducation(education.find((e) => e.id === element.id));
			}}
		></EducationCard>
	));

	return (
		<div className="tab-content education-tab">
			<EducationForm currentEducation={currentEducation} setCurrentEducation={setCurrentEducation} />
			{cards}
		</div>
	);
}

export default EducationTabContent;

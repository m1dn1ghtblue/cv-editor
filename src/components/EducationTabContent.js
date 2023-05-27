import React from 'react';
import './styles/EducationTabContent.css';
import EducationForm from './EducationForm';
import Card from './Card';

function EducationTabContent() {
	return (
		<div className="tab-content education-tab">
			<EducationForm />
			<Card
				organisation="university"
				location="city"
				title="bachelor of science"
				dateStart="01.09.2021"
				dateEnd="01.09.2023"
			/>
		</div>
	);
}

export default EducationTabContent;

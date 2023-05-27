import React, { useContext } from 'react';
import './styles/EducationTabContent.css';
import EducationForm from './EducationForm';
import Card from './Card';
import CVContext from '../CVContext';

function EducationTabContent() {
	const { education } = useContext(CVContext);

	const cards = education.map((element) => (
		<Card
			key={element.id}
			title={element.quailification}
			startDate={element.startDate}
			endDate={element.endDate}
			organisation={element.schoolName}
			location={element.location}
			onDelete={() => {}}
		></Card>
	));

	return (
		<div className="tab-content education-tab">
			<EducationForm />
			{cards}
		</div>
	);
}

export default EducationTabContent;

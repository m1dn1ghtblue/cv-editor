import React, { useContext, useState } from 'react';
import './styles/WorkExperienceTabContent.css';
import WorkExperienceForm from './WorkExperienceForm';
import CVContext from '../CVContext';
import WorkExperience from '../CVdata/WorkExperience';
import WorkExperienceCard from './WorkExperienceCard';

function WorkExperienceTabContent() {
	const { work, deleteWork, addWork } = useContext(CVContext);
	const [currentWork, setCurrentWork] = useState(new WorkExperience());

	const cards = work.map((element) => (
		<WorkExperienceCard
			key={`form-work-card-${element.id}`}
			workExperience={element}
			onDelete={() => {
				deleteWork(element.id);
			}}
			onEdit={() => {
				setCurrentWork(work.find((e) => e.id === element.id));
			}}
		></WorkExperienceCard>
	));

	return (
		<div className="tab-content work-tab">
			<WorkExperienceForm
				currentWork={currentWork}
				setCurrentWork={setCurrentWork}
				onSubmit={(work) => {
					addWork(work);
				}}
			/>
			{cards}
		</div>
	);
}

export default WorkExperienceTabContent;

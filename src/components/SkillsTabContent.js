import React, { useContext } from 'react';
import './styles/SkillsTabContent.css';
import SkillForm from './SkillForm';
import SkillCard from './SkillCard';
import CVContext from '../CVContext';

function SkillsTabContent() {
	const { skills, addSkill, deleteSkill } = useContext(CVContext);

	const cards = skills.map((element) => (
		<SkillCard
			key={`form-skill-card-${element.id}`}
			skill={element}
			onDelete={() => {
				deleteSkill(element.id);
			}}
		></SkillCard>
	));

	return (
		<div className="tab-content skills-tab">
			<SkillForm onSubmit={addSkill} />
			<div className="skill-list">{cards}</div>
		</div>
	);
}

export default SkillsTabContent;

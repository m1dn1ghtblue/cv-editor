import React from 'react';
import './styles/SkillsTabContent.css';
import SkillForm from './SkillForm';
import SkillCard from './SkillCard';

function SkillsTabContent() {
	return (
		<div className="tab-content skills-tab">
			<SkillForm />
			<ul className="skill-list">
				<li>
					<SkillCard title="skill 1" onDelete={() => {}}></SkillCard>
				</li>
				<li>
					<SkillCard title="skill 2" onDelete={() => {}}></SkillCard>
				</li>
			</ul>
		</div>
	);
}

export default SkillsTabContent;

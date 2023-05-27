import React, { useState } from 'react';
import './styles/EditorTabContainer.css';
import TabButton from './TabButton';
import PersonalTabContent from './PersonalTabContent';
import EducationTabContent from './EducationTabContent';
import WorkExperienceTabContent from './WorkExperienceTabContent';
import SkillsTabContent from './SkillsTabContent';
import SummaryTabContent from './SummaryTabContent';

function EditorTabContainer() {
	const [activeTab, setActiveTab] = useState(0);

	const tabs = [
		{ id: 0, name: 'Pesonal data' },
		{ id: 1, name: 'Education' },
		{ id: 2, name: 'Work experience' },
		{ id: 3, name: 'Skills' },
		{ id: 4, name: 'Summary' },
	];

	const onTabButtonClick = (id, content) => {
		setActiveTab(id);
	};

	return (
		<div className="editor-tab-container">
			<div className="tab-list">
				{tabs.map((tab) => (
					<TabButton
						key={tab.id}
						title={tab.name}
						active={tab.id === activeTab}
						onclick={() => onTabButtonClick(tab.id)}
					/>
				))}
			</div>
			{activeTab === 0 && <PersonalTabContent />}
			{activeTab === 1 && <EducationTabContent />}
			{activeTab === 2 && <WorkExperienceTabContent />}
			{activeTab === 3 && <SkillsTabContent />}
			{activeTab === 4 && <SummaryTabContent />}
		</div>
	);
}

export default EditorTabContainer;

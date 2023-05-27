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
	const [activeContent, setActiveContent] = useState(PersonalTabContent);

	const tabs = [
		{ id: 0, name: 'Pesonal data', content: PersonalTabContent },
		{ id: 1, name: 'Education', content: EducationTabContent },
		{ id: 2, name: 'Work experience', content: WorkExperienceTabContent },
		{ id: 3, name: 'Skills', content: SkillsTabContent },
		{ id: 4, name: 'Summary', content: SummaryTabContent },
	];

	const onTabButtonClick = (buttonId, content) => {
		setActiveTab(buttonId);
		setActiveContent(content);
	};

	return (
		<div className="editor-tab-container">
			<div className="tab-list">
				{tabs.map((tab) => (
					<TabButton
						key={tab.id}
						title={tab.name}
						active={tab.id === activeTab}
						onclick={() => onTabButtonClick(tab.id, tab.content)}
					/>
				))}
			</div>
			{activeContent}
		</div>
	);
}

export default EditorTabContainer;

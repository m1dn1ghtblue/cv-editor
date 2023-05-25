import React, { Component } from 'react';
import './styles/EditorTabContainer.css';
import TabButton from './TabButton';
import PersonalTabContent from './PersonalTabContent';
import EducationTabContent from './EducationTabContent';
import WorkExperienceTabContent from './WorkExperienceTabContent';
import SkillsTabContent from './SkillsTabContent';
import SummaryTabContent from './SummaryTabContent';

class EditorTabContainer extends Component {
	state = {
		activeTab: 0,
		activeContent: PersonalTabContent,
	};

	tabs = [
		{ id: 0, name: 'Pesonal data', content: PersonalTabContent },
		{ id: 1, name: 'Education', content: EducationTabContent },
		{ id: 2, name: 'Work experience', content: WorkExperienceTabContent },
		{ id: 3, name: 'Skills', content: SkillsTabContent },
		{ id: 4, name: 'Summary', content: SummaryTabContent },
	];

	onTabButtonClick = (buttonId, content) => {
		this.setState({
			activeTab: buttonId,
			activeContent: content,
		});
	};

	render() {
		const Content = this.state.activeContent;

		return (
			<div className="editor-tab-container">
				<div className="tab-list">
					{this.tabs.map((tab) => (
						<TabButton
							key={tab.id}
							title={tab.name}
							active={tab.id === this.state.activeTab}
							onclick={() => this.onTabButtonClick(tab.id, tab.content)}
						/>
					))}
				</div>
				<Content></Content>
			</div>
		);
	}
}

export default EditorTabContainer;

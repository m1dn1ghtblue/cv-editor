import React, { Component } from 'react';
import './styles/EditorTabContainer.css';
import TabButton from './TabButton';

class EditorTabContainer extends Component {
	state = {
		activeTab: 0,
	};

	tabs = [
		{ id: 0, name: 'Pesonal data', content: null },
		{ id: 1, name: 'Education', content: null },
		{ id: 2, name: 'Work experience', content: null },
		{ id: 3, name: 'Skills', content: null },
		{ id: 4, name: 'Summary', content: null },
	];

	onTabButtonClick = (buttonId) => {
		this.setState({
			activeTab: buttonId,
		});
	};

	render() {
		return (
			<div className="editor-tab-container">
				<div className="tab-list">
					{this.tabs.map((tab) => (
						<TabButton
							key={tab.id}
							title={tab.name}
							active={tab.id === this.state.activeTab}
							onclick={() => this.onTabButtonClick(tab.id)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default EditorTabContainer;

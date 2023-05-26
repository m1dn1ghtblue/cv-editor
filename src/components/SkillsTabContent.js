import React, { Component } from 'react';
import './styles/SkillsTabContent.css';
import SkillForm from './SkillForm';
import SkillCard from './SkillCard';

class SkillsTabContent extends Component {
	state = {};
	render() {
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
}

export default SkillsTabContent;

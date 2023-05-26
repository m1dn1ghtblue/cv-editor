import React, { Component } from 'react';
import './styles/WorkExperienceTabContent.css';
import WorkExperienceForm from './WorkExperienceForm';

class WorkExperienceTabContent extends Component {
	state = {};
	render() {
		return (
			<div className="tab-content">
				<WorkExperienceForm />
			</div>
		);
	}
}

export default WorkExperienceTabContent;

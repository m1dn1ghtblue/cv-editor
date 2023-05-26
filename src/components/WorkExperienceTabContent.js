import React, { Component } from 'react';
import './styles/WorkExperienceTabContent.css';
import WorkExperienceForm from './WorkExperienceForm';
import Card from './Card';

class WorkExperienceTabContent extends Component {
	state = {};
	render() {
		return (
			<div className="tab-content">
				<WorkExperienceForm />
				<Card
					title="employee"
					organisation="employer"
					location="city"
					dateStart="01.09.2021"
					dateEnd="01.09.2023"
				/>
			</div>
		);
	}
}

export default WorkExperienceTabContent;

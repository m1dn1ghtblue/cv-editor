import React, { Component } from 'react';
import './styles/PersonalTabContent.css';
import PhotoInput from './PhotoInput';
import PersonalForm from './PersonalForm';

class PersonalTabContent extends Component {
	state = {};

	render() {
		return (
			<div className="tab-content personal-tab">
				<PhotoInput />
				<PersonalForm />
			</div>
		);
	}
}

export default PersonalTabContent;

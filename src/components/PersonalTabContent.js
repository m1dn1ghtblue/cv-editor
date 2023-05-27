import React from 'react';
import './styles/PersonalTabContent.css';
import PhotoInput from './PhotoInput';
import PersonalForm from './PersonalForm';

function PersonalTabContent() {
	return (
		<div className="tab-content personal-tab">
			<PhotoInput />
			<PersonalForm />
		</div>
	);
}

export default PersonalTabContent;

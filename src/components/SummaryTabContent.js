import React from 'react';
import './styles/SummaryTabContent.css';

function SummaryTabContent() {
	return (
		<div className="tab-content summary-tab">
			<h2>Write a short pitch about yourself</h2>
			<textarea className="summary-input"></textarea>
		</div>
	);
}

export default SummaryTabContent;

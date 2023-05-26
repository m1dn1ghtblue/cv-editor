import React, { Component } from 'react';
import './styles/SummaryTabContent.css';

class SummaryTabContent extends Component {
	state = {};
	render() {
		return (
			<div className="tab-content summary-tab">
				<h2>Write a short pitch about yourself</h2>
				<textarea className="summary-input"></textarea>
			</div>
		);
	}
}

export default SummaryTabContent;

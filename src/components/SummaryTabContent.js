import React, { useContext } from 'react';
import './styles/SummaryTabContent.css';
import CVContext from '../CVContext';

function SummaryTabContent() {
	const { summary, setSummary } = useContext(CVContext);

	return (
		<div className="tab-content summary-tab">
			<h2>Write a short pitch about yourself</h2>
			<textarea className="summary-input" value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>
		</div>
	);
}

export default SummaryTabContent;

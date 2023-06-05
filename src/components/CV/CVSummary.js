import React from 'react';
import '../styles/CV/CVSummary.css';

export default function CVSummary({ text }) {
	return (
		<div className="cv-summary">
			<h3 className="cv-section-header">About me</h3>
			<p>{text}</p>
		</div>
	);
}

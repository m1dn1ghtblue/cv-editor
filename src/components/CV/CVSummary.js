import React from 'react';

export default function CVSummary({ text }) {
	return (
		<div className>
			<h3 className="cv-section-header">About me</h3>
			<p>{text}</p>
		</div>
	);
}

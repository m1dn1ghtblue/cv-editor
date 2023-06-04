import React from 'react';
import '../styles/CV/CVContactLabel.css';

export default function CVContactLabel({ title, value }) {
	return (
		<div className="contact-label">
			<span className="contact-title">{title}</span>
			<span className="contact-value">{value}</span>
		</div>
	);
}

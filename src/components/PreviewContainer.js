import React from 'react';
import './styles/PreviewContainer.css';
import Preview from './Preview';

export default function PreviewContainer() {
	const save = () => {};
	return (
		<div className="preview-container">
			<Preview />
			<button onClick={save}>Save as pdf</button>
		</div>
	);
}

import React, { useRef } from 'react';
import './styles/PreviewContainer.css';
import PreviewClassWrapper from './PreviewClassWrapper';
import { useReactToPrint } from 'react-to-print';

export default function PreviewContainer() {
	const componentToPrintRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentToPrintRef.current,
	});

	return (
		<div className="preview-container">
			<PreviewClassWrapper ref={componentToPrintRef} />
			<button onClick={handlePrint}>Save as pdf</button>
		</div>
	);
}

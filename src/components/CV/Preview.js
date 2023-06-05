import React, { useContext } from 'react';
import '../styles/CV/Preview.css';
import CVContext from '../../CVContext';
import CVSidebar from './CVSidebar';
import CVHeader from './CVHeader';
import CVSummary from './CVSummary';

function Preview() {
	const { personal, education, work, skills, summary, photoUrl } = useContext(CVContext);

	return (
		<div className="preview" id="CV-preview">
			<CVSidebar />
			<div>
				<CVHeader />
				<div className="main-content">{summary.length > 0 && <CVSummary text={summary} />}</div>
			</div>
		</div>
	);
}

export default Preview;

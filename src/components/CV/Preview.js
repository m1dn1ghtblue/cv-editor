import React, { useContext } from 'react';
import '../styles/CV/Preview.css';
import CVContext from '../../CVContext';
import CVSidebar from './CVSidebar';
import CVHeader from './CVHeader';

function Preview() {
	const { personal, education, work, skills, summary, photoUrl } = useContext(CVContext);

	return (
		<div className="preview" id="CV-preview">
			<CVSidebar />
			<CVHeader />
		</div>
	);
}

export default Preview;

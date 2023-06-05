import React, { useContext } from 'react';
import '../styles/CV/Preview.css';
import CVContext from '../../CVContext';
import CVSidebar from './CVSidebar';
import CVHeader from './CVHeader';
import CVSummary from './CVSummary';
import CVWorkExperience from './CVWorkExperience';
import CVEducation from './CVEducation';

function Preview() {
	const { personal, education, work, skills, summary, photoUrl } = useContext(CVContext);

	return (
		<div className="preview" id="CV-preview">
			<CVSidebar />
			<div>
				<CVHeader />
				<div className="main-content">
					{summary.length > 0 && <CVSummary text={summary} />}
					{work.length > 0 && <CVWorkExperience workList={work} />}
					{education.length > 0 && <CVEducation educationList={education} />}
				</div>
			</div>
		</div>
	);
}

export default Preview;

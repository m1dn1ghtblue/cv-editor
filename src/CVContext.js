import React, { useState } from 'react';
import Personal from './CVdata/Personal';

const CVContext = React.createContext();

function CVProvider({ children }) {
	const [personal, setPersonal] = useState(new Personal());
	const [education, setEducation] = useState([]);
	const [work, setWork] = useState([]);
	const [skills, setSkills] = useState([]);
	const [summary, setSummary] = useState('');

	const provider = {
		personal,
		setPersonal,
		education,
		setEducation,
		work,
		setWork,
		skills,
		setSkills,
		summary,
		setSummary,
	};

	return <CVContext.Provider value={provider}>{children}</CVContext.Provider>;
}

export default CVContext;
export { CVProvider };

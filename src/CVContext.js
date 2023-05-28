import React, { useState } from 'react';
import Personal from './CVdata/Personal';

const CVContext = React.createContext();

function CVProvider({ children }) {
	const [personal, setPersonal] = useState(new Personal());
	const [education, setEducation] = useState([]);
	const [work, setWork] = useState([]);
	const [skills, setSkills] = useState([]);
	const [summary, setSummary] = useState('');

	function addEducation(newEducation) {
		const index = education.findIndex((e) => e.id === newEducation.id);
		const newArray = [...education];

		if (index === -1) {
			newArray.push(newEducation);
		} else {
			newArray[index] = newEducation;
		}
		setEducation(newArray);
	}

	function deleteEducation(id) {
		setEducation(education.filter((e) => e.id !== id));
	}

	function addWork(newWork) {
		setWork([...work, newWork]);
	}
	function deleteWork(id) {
		setWork(work.filter((e) => e.id !== id));
	}

	function addSkill(newSkill) {
		setSkills([...skills, newSkill]);
	}
	function deleteSkill(id) {
		setSkills(skills.filter((e) => e.id !== id));
	}

	const provider = {
		personal,
		setPersonal,
		education,
		addEducation,
		deleteEducation,
		work,
		addWork,
		deleteWork,
		skills,
		addSkill,
		deleteSkill,
		summary,
		setSummary,
	};

	return <CVContext.Provider value={provider}>{children}</CVContext.Provider>;
}

export default CVContext;
export { CVProvider };

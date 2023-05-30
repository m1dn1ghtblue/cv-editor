import React, { useState } from 'react';
import Personal from './CVdata/Personal';

const CVContext = React.createContext();

function CVProvider({ children }) {
	const [personal, setPersonal] = useState(new Personal());
	const [education, setEducation] = useState([]);
	const [work, setWork] = useState([]);
	const [skills, setSkills] = useState([]);
	const [summary, setSummary] = useState('');
	const [photoUrl, setPhotoUrl] = useState(null);

	function addElement(array, element) {
		const index = array.findIndex((e) => e.id === element.id);
		const newArray = [...array];
		if (index === -1) {
			newArray.push(element);
		} else {
			newArray[index] = element;
		}
		return newArray;
	}

	function addEducation(newEducation) {
		setEducation(addElement(education, newEducation));
	}

	function deleteEducation(id) {
		setEducation(education.filter((e) => e.id !== id));
	}

	function addWork(newWork) {
		setWork(addElement(work, newWork));
	}
	function deleteWork(id) {
		setWork(work.filter((e) => e.id !== id));
	}

	function addSkill(newSkill) {
		setSkills(addElement(skills, newSkill));
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
		photoUrl,
		setPhotoUrl,
	};

	return <CVContext.Provider value={provider}>{children}</CVContext.Provider>;
}

export default CVContext;
export { CVProvider };

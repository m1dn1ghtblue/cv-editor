import React, { useContext } from 'react';
import './styles/Preview.css';
import CVContext from '../CVContext';

function Preview() {
	const { personal, education /*work, skills, summary*/ } = useContext(CVContext);

	return (
		<div className="preview">
			<h3>Personal</h3>
			{Object.keys(personal).map((key) => (
				<p key={`personal_previewKey_${key}`}>
					{key}: {personal[key]}
				</p>
			))}

			<h3>Education</h3>
			{Array.from(education).map((e) =>
				Object.keys(e).map((key) => (
					<p key={`education_previewkey_${key}`}>
						{key.toString()}: {e[key].toString()}
					</p>
				))
			)}
		</div>
	);
}

export default Preview;

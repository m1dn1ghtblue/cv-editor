import React, { useContext } from 'react';
import './styles/Preview.css';
import CVContext from '../CVContext';

function Preview() {
	const { personal, education /*work, skills, summary*/ } = useContext(CVContext);

	return (
		<div className="preview">
			<h3>Personal</h3>
			{Object.keys(personal).map((key) => (
				<p key={key}>
					{key}: {personal[key]}
				</p>
			))}

			<h3>Education</h3>
			{education.map((e) =>
				Object.keys(e).map((key) => (
					<p key={e.id}>
						{key.toString()}: {e[key].toString()}
					</p>
				))
			)}
		</div>
	);
}

export default Preview;

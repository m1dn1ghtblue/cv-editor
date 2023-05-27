import React, { useContext } from 'react';
import './styles/Preview.css';
import CVContext from '../CVContext';

function Preview() {
	const { personal /*, education, work, skills, summary*/ } = useContext(CVContext);

	return (
		<div className="preview">
			<h2>Personal</h2>
			{Object.keys(personal).map((key) => (
				<p key={key}>
					{key}: {personal[key]}
				</p>
			))}
		</div>
	);
}

export default Preview;

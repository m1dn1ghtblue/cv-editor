import React, { useContext } from 'react';
import './styles/Preview.css';
import CVContext from '../CVContext';

function Preview() {
	const { personal, education, work /* skills, summary*/ } = useContext(CVContext);

	return (
		<div className="preview">
			<h3>Personal</h3>
			{Object.keys(personal).map((key) => (
				<p key={`personal_previewKey_${key}`}>
					{key}: {personal[key]}
				</p>
			))}

			<h3>Education</h3>
			{education.map((e) => (
				<div key={`edu_previewkey_${e.id}`} style={{ border: '1px solid teal', padding: '4px', margin: '2px' }}>
					{Object.keys(e).map((key) => (
						<p key={`edu_previewkey_${e.id}${key}`}>
							{key.toString()}: {e[key].toString()}
						</p>
					))}
				</div>
			))}

			<h3>Work experience</h3>
			{work.map((e) => (
				<div
					key={`work_previewkey_${e.id}`}
					style={{ border: '1px solid teal', padding: '4px', margin: '2px' }}
				>
					{Object.keys(e).map((key) => (
						<p key={`work_previewkey_${e.id}${key}`}>
							{key.toString()}: {e[key].toString()}
						</p>
					))}
				</div>
			))}
		</div>
	);
}

export default Preview;

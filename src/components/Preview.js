import React, { useContext } from 'react';
import './styles/Preview.css';
import CVContext from '../CVContext';

function Preview() {
	const cv = useContext(CVContext);

	const items = flattenObj(cv, null).map(([propName, val]) => {
		return (
			<p key={propName}>
				<i>{propName}:</i> {val}
			</p>
		);
	});

	return <div className="preview">{items}</div>;
}

export default Preview;

function flattenObj(obj, parent, res = []) {
	for (let key in obj) {
		let propName = parent ? parent + '_' + key : key;
		if (typeof obj[key] == 'object') {
			flattenObj(obj[key], propName, res);
		} else {
			res.push([propName, obj[key]]);
		}
	}
	return res;
}

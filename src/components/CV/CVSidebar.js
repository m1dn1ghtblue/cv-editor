import React, { useContext } from 'react';
import CVContext from '../../CVContext';
import '../styles/CV/CVSidebar.css';
import CVContactLabel from './CVContactLabel';

export default function CVSidebar() {
	const { personal, skills, photoUrl } = useContext(CVContext);

	return (
		<div className="cv-sidebar">
			<div className="photo-container">{photoUrl && <img src={photoUrl} alt="" />}</div>
			{personal.email && <CVContactLabel title={'Email'} value={personal.email} />}
			{personal.phone && <CVContactLabel title={'Phone'} value={personal.phone} />}
			{(personal.address || personal.city) && (
				<CVContactLabel title={'Address'} value={`${personal.address} ${personal.postcode} ${personal.city}`} />
			)}
		</div>
	);
}

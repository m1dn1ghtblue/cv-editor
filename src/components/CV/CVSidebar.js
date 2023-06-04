import React, { useContext } from 'react';
import CVContext from '../../CVContext';
import '../styles/CV/CVSidebar.css';
import CVContactLabel from './CVContactLabel';
import CVSkillList from './CVSkillList';

export default function CVSidebar() {
	const { personal, skills, photoUrl } = useContext(CVContext);

	return (
		<div className="cv-sidebar">
			<div className="photo-container">{photoUrl && <img src={photoUrl} alt="" />}</div>
			{skills.length > 0 && <CVSkillList skills={skills} />}
			<div className="contacts">
				{personal.email && <CVContactLabel title={'Email'} value={personal.email} />}
				{personal.phone && <CVContactLabel title={'Phone'} value={personal.phone} />}
				{(personal.address || personal.city) && (
					<CVContactLabel
						title={'Address'}
						value={`${personal.address}${
							personal.address && (personal.city || personal.postcode) ? ',' : ''
						} ${personal.postcode} ${personal.city}`}
					/>
				)}
			</div>
		</div>
	);
}

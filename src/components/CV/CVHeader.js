import '../styles/CV/CVHeader.css';
import { useContext } from 'react';
import CVContext from '../../CVContext';

export default function CVHeader() {
	const { personal } = useContext(CVContext);

	return (
		<div className="cv-header">
			<h2>
				<span className="name">
					{personal.firstName} {personal.lastName}
				</span>
			</h2>
			<span className="professional-title">{personal.title}</span>
		</div>
	);
}

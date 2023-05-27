import React from 'react';

function Card({ title, startDate, endDate, organisation, location, onDelete }) {
	return (
		<div className="card">
			<h3>{title}</h3>
			<h4>
				{organisation}, {location}
			</h4>
			<p>
				{startDate} - {endDate}
			</p>

			<button onClick={() => onDelete()}>delete</button>
		</div>
	);
}

export default Card;

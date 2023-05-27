import React from 'react';

function Card({ title, dateStart, dateEnd, organisation, location, onDelete }) {
	return (
		<div className="card">
			<h3>{title}</h3>
			<h4>
				{organisation}, {location}
			</h4>
			<p>
				{dateStart} - {dateEnd}
			</p>

			<button onClick={() => onDelete()}>delete</button>
		</div>
	);
}

export default Card;

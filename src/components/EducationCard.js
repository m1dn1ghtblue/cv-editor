import React, { Component } from 'react';

class EducationCard extends Component {
	state = {};

	render() {
		const { title, dateStart, dateEnd, organisation, location } = this.props;
		return (
			<div className="card">
				<h3>{title}</h3>
				<h4>
					{organisation}, {location}
				</h4>
				<p>
					{dateStart} - {dateEnd}
				</p>
			</div>
		);
	}
}

export default EducationCard;

import React, { Component } from 'react';
import './styles/TabButton.css';

class TabButton extends Component {
	state = {};

	render() {
		const { active, title, onclick } = this.props;

		return (
			<div className={`tab-button ${active ? 'active' : ''}`} onClick={onclick}>
				{title}
			</div>
		);
	}
}

export default TabButton;

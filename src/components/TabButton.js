import React from 'react';
import './styles/TabButton.css';

function TabButton({ active, title, onclick }) {
	return (
		<div className={`tab-button ${active ? 'active' : ''}`} onClick={onclick}>
			{title}
		</div>
	);
}

export default TabButton;

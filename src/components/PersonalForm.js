import React, { useContext } from 'react';
import './styles/PersonalForm.css';
import CVContext from '../CVContext';

function PersonalForm() {
	const { personal, setPersonal } = useContext(CVContext);

	const onChange = (key, value) => {
		setPersonal({
			...personal,
			[`${key}`]: value,
		});
	};

	return (
		<form className="personal-form">
			<label htmlFor="first-name-input" id="first-name">
				First Name
				<input
					id="first-name-input"
					value={personal.firstName}
					onChange={(e) => onChange('firstName', e.target.value)}
				></input>
			</label>
			<label
				htmlFor="first-name-input"
				id="last-name"
				value={personal.lastName}
				onChange={(e) => onChange('lastName', e.target.value)}
			>
				Last Name
				<input id="last-name-input"></input>
			</label>
			<label htmlFor="title-input" id="title">
				Professional Title
				<input
					id="title-input"
					value={personal.title}
					onChange={(e) => onChange('title', e.target.value)}
				></input>
			</label>
			<label htmlFor="address-input" id="address">
				Street Address
				<input
					id="address-input"
					value={personal.address}
					onChange={(e) => onChange('address', e.target.value)}
				></input>
			</label>
			<label htmlFor="postcode-input" id="postcode">
				Postcode
				<input
					id="postcode-input"
					value={personal.postcode}
					onChange={(e) => onChange('postcode', e.target.value)}
				></input>
			</label>
			<label htmlFor="city-input" id="city">
				City
				<input id="city-input" value={personal.city} onChange={(e) => onChange('city', e.target.value)}></input>
			</label>
			<label htmlFor="phone-input" id="phone">
				Phone
				<input
					id="phone-input"
					value={personal.phone}
					onChange={(e) => onChange('phone', e.target.value)}
				></input>
			</label>
			<label htmlFor="email-input" id="email">
				Email
				<input
					id="email-input"
					value={personal.email}
					onChange={(e) => onChange('email', e.target.value)}
				></input>
			</label>
		</form>
	);
}

export default PersonalForm;

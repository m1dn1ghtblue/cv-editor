import React, { Component } from 'react';
import './styles/PersonalForm.css';

class PersonalForm extends Component {
	render() {
		return (
			<form className="personal-form">
				<label htmlFor="first-name-input" id="first-name">
					First Name
					<input id="first-name-input"></input>
				</label>
				<label htmlFor="first-name-input" id="last-name">
					Last Name
					<input id="last-name-input"></input>
				</label>
				<label htmlFor="title-input" id="title">
					Professional Title
					<input id="titl-input"></input>
				</label>
				<label htmlFor="address-input" id="address">
					Street Address
					<input id="address-input"></input>
				</label>
				<label htmlFor="postcode-input" id="postcode">
					Postcode
					<input id="postcode-input"></input>
				</label>
				<label htmlFor="city-input" id="city">
					City
					<input id="city-input"></input>
				</label>
				<label htmlFor="phone-input" id="phone">
					Phone
					<input id="phone-input"></input>
				</label>
				<label htmlFor="email-input" id="email">
					Email
					<input id="email-input"></input>
				</label>
			</form>
		);
	}
}

export default PersonalForm;

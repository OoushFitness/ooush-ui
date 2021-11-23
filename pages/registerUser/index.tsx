import React, { useState } from "react"

import Button from "../../src/components/common/button/button";
import { countryCodes } from "../../utils/login/loginUtils";

import styles from "../../styles/registerUser.module.css";

export default function Dashboard() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [emailValidated, setEmailValidated] = useState(false);
	const [countryCode, setCountryCode] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [userName, setUserName] = useState("");
	const [location, setLocation] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [fieldInFocus, setFieldInFocus] = useState("");

	const registerUser = () => {
		let data = {
			email: "petesmith@live.co.uk",
			password: "BlahBlahBlah123!!",
			phoneNumber: "07846967190",
			userName: "PeteyS",
			firstName: "Pete",
			lastName: "Smith",
			location: "Manchester"
		};
		fetch('http://localhost:8080/users/registerUser', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
	}

	const handleChange = (event: any, source: string) => {
		switch (source) {
			case "firstName":
				setFirstName(event.target.value);
				break;
			case "lastName":
				setLastName(event.target.value);
				break;
			case "countryCode":
				setCountryCode(event.target.value);
				break;
			case "phone":
				setPhoneNumber(event.target.value);
				break;
			case "userName":
				setUserName(event.target.value);
				break;
			case "email":
				const emailAddress = event.target.value;
				setEmail(emailAddress);
				validateEmailAddress(emailAddress);
				break;
			case "location":
				setLocation(event.target.value);
				break;
			case "password":
				setPassword(event.target.value);
				break;
			case "passwordConfirm":
				setPasswordConfirm(event.target.value);
				break;
		}
	}

	const validateEmailAddress = (emailAddress: string) => {
		const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if(regex.test(emailAddress)) {
			setEmailValidated(true);
		}
	}

	const animateLabels = (field: string) => {
		setFieldInFocus(field);
	}

	return (
		<div className={styles.container}>
			<form className={styles.formRegisterUser}>
				<div className={styles.divFormGroupContainer} onMouseEnter={() => animateLabels("firstName")} onMouseLeave={() => animateLabels("")}>
					<label className={fieldInFocus === "firstName" ? styles.lblFormGroupFocus : styles.lblFormGroup}>First Name</label>
					<input className={styles.inputFormGroup} id="name-input" type="text" value={firstName} onChange={(e) => handleChange(e, "firstName")} />
				</div>
				<div className={styles.divFormGroupContainer} onMouseEnter={() => animateLabels("lastName")} onMouseLeave={() => animateLabels("")}>
					<label className={fieldInFocus === "lastName" ? styles.lblFormGroupFocus : styles.lblFormGroup}>Last Name</label>
					<input className={styles.inputFormGroup} id="last-name-input" type="text" value={lastName} onChange={(e) => handleChange(e, "lastName")} />
				</div>
				<div className={styles.divFormGroupContainer} onMouseEnter={() => animateLabels("phone")} onMouseLeave={() => animateLabels("")}>
					<label className={fieldInFocus === "phone" ? styles.lblFormGroupPhoneFocus : styles.lblFormGroup}>Phone Number</label>
					<select className={styles.inputFormCountryCodeGroup} id="phone-input" value={countryCode} onChange={(e) => handleChange(e, "countryCode")} >
						<option hidden>Country Code</option>
						<option disabled defaultValue="true">Select Country Code</option>
						{countryCodes.map(countryCode => {
							return (
								<option key={countryCode.country} value={countryCode.countryCodes[0]}>{countryCode.country + " " + countryCode.countryCodes[0]}</option>
							);
						})}
					</select>
					<input className={styles.inputFormPhoneNumberGroup} id="phone-input" type="text" value={phoneNumber} onChange={(e) => handleChange(e, "phone")} />
				</div>
				<div className={styles.divFormGroupContainer} onMouseEnter={() => animateLabels("userName")} onMouseLeave={() => animateLabels("")}>
					<label className={fieldInFocus === "userName" ? styles.lblFormGroupFocus : styles.lblFormGroup}>User Name</label>
					<input className={styles.inputFormGroup} id="username-input" type="text" value={userName} onChange={(e) => handleChange(e, "userName")} />
				</div>
				<div className={styles.divFormGroupContainer} onMouseEnter={() => animateLabels("email")} onMouseLeave={() => animateLabels("")}>
					<label className={fieldInFocus === "email" ? styles.lblFormGroupFocus : styles.lblFormGroup}>Email Address</label>
					<input className={styles.inputFormGroup} autoComplete="new-password" id="email-input" type="email" value={email} onChange={(e) => handleChange(e, "email")} />
				</div>
				<div className={styles.divFormGroupContainer} onMouseEnter={() => animateLabels("location")} onMouseLeave={() => animateLabels("")}>
					<label className={fieldInFocus === "location" ? styles.lblFormGroupFocus : styles.lblFormGroup}>Location</label>
					<input className={styles.inputFormGroup} id="location-input" type="text" value={location} onChange={(e) => handleChange(e, "location")} />
				</div>
				<div className={styles.divFormGroupContainer} onMouseEnter={() => animateLabels("password")} onMouseLeave={() => animateLabels("")}>
					<label className={fieldInFocus === "password" ? styles.lblFormGroupFocus : styles.lblFormGroup}>Password</label>
					<input className={styles.inputFormGroup} autoComplete="new-password" id="password-input" type="password" value={password} onChange={(e) => handleChange(e, "password")} />
				</div>
				<div className={styles.divFormGroupContainer} onMouseEnter={() => animateLabels("passwordConfirm")} onMouseLeave={() => animateLabels("")}>
					<label className={fieldInFocus === "passwordConfirm" ? styles.lblFormGroupFocus : styles.lblFormGroup}>Confirm Password</label>
					<input className={styles.inputFormGroup} autoComplete="new-password" id="confirm-password-input" type="password" value={passwordConfirm} onChange={(e) => handleChange(e, "passwordConfirm")} />
				</div>
				<Button text={firstName.length > 0 ? "OOUSH!!!" : ""}
					textColor="red"
					textSize={48}
					backgroundColor="white"
					theme="primary"
					onClick={() => registerUser()}
					type="button"
					name="Ooush Button"
					borderRadius={8}
					height="100px"
					width="100%"
				/>
			</form>
		</div>
	)
}

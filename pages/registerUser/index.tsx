import React, { useState } from "react"

import Button from "../../src/components/common/button/button";
import { countryCodes } from "../../utils/login/loginUtils";

import styles from "../../styles/registerUser.module.css";
import {LOGIN_MESSAGE_TIMEOUT_MILLISECONDS} from "../../utils/constants/ooush-constants";
import registerUser from "../../service/user/userService";

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
	const [fieldsWithContent, setFieldsWithContent] = useState(new Set);
    const [registrationMessage, setRegistrationMessage] = useState("");
    const [error, setError] = useState("");

	const registerNewUser = () => {
		let data = {
			email: "pete@ooushfitness.com",
			password: "Liverpool1",
			phoneNumber: "07846967190",
			userName: "PeteyS",
			firstName: "Pete",
			lastName: "Smith",
			location: "Manchester"
		};
        registerUser(data).then((response: any) => {
            console.log(response)
            displayNotification(response.body);
        }).catch((error: string)  => {
            setError(error);
            console.error("Error on registration", error);
        })
	}

    const displayNotification = (message: string) => {
        setRegistrationMessage(message);
        setTimeout(() => {
            setRegistrationMessage("");
        }, LOGIN_MESSAGE_TIMEOUT_MILLISECONDS);
    }

	const handleChange = (event: any, source: string) => {
	    const value = event.target.value;
		switch (source) {
			case "firstName":
                addOrRemoveFieldsWithEntries(value.length, source);
				setFirstName(value);
				break;
			case "lastName":
                addOrRemoveFieldsWithEntries(value.length, source);
				setLastName(value);
				break;
			case "countryCode":
                addOrRemoveFieldsWithEntries(value.length, source);
				setCountryCode(value);
				break;
			case "phone":
                addOrRemoveFieldsWithEntries(value.length, source);
				setPhoneNumber(value);
				break;
			case "userName":
                addOrRemoveFieldsWithEntries(value.length, source);
				setUserName(value);
				break;
			case "email":
                addOrRemoveFieldsWithEntries(value.length, source);
				setEmail(value);
				validateEmailAddress(value);
				break;
			case "location":
                addOrRemoveFieldsWithEntries(value.length, source);
				setLocation(value);
				break;
			case "password":
                addOrRemoveFieldsWithEntries(value.length, source);
				setPassword(value);
				break;
			case "passwordConfirm":
                addOrRemoveFieldsWithEntries(value.length, source);
				setPasswordConfirm(value);
				break;
		}
	}

	const validateEmailAddress = (emailAddress: string) => {
		const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if(regex.test(emailAddress)) {
			setEmailValidated(true);
		}
	}

	const addOrRemoveFieldsWithEntries = (entryLength: number, source: string) => {
	    if(entryLength > 0) {
	        const updatedFields = fieldsWithContent.add(source);
	        setFieldsWithContent(updatedFields);
        } else {
	        const removedFields = fieldsWithContent;
	        const fieldWasRemoved = removedFields.delete(source);
	        if(fieldWasRemoved) {
                setFieldsWithContent(removedFields);
            }
        }
    }

	const animateLabels = (field: string) => {
		setFieldInFocus(field);
	}

	const fieldInUseOrFocus = (field: string) => {
	    return fieldInFocus === field || fieldsWithContent.has(field);
    }

	return (
		<div className={styles.container}>
			<form className={styles.formRegisterUser}>
				<div className={styles.divFormGroupContainer} onFocus={() => animateLabels("firstName")}>
					<label className={fieldInUseOrFocus("firstName") ? styles.lblFormGroupFocus : styles.lblFormGroup}>First Name</label>
					<input className={styles.inputFormGroup} id="name-input" type="text" value={firstName} onChange={(e) => handleChange(e, "firstName")} />
				</div>
				<div className={styles.divFormGroupContainer} onFocus={() => animateLabels("lastName")}>
					<label className={fieldInUseOrFocus("lastName") ? styles.lblFormGroupFocus : styles.lblFormGroup}>Last Name</label>
					<input className={styles.inputFormGroup} id="last-name-input" type="text" value={lastName} onChange={(e) => handleChange(e, "lastName")} />
				</div>
				<div className={styles.divFormGroupContainer} onFocus={() => animateLabels("phone")}>
					<select className={styles.inputFormCountryCodeGroup} id="phone-input" value={countryCode} onChange={(e) => handleChange(e, "countryCode")} >
						<option className={styles.hiddenSelectOption} hidden>Country Code</option>
						<option disabled defaultValue="true">Select Country Code</option>
						{countryCodes.map(countryCode => {
							return (
								<option key={countryCode.country} value={countryCode.countryCodes[0]}>{countryCode.country + " " + countryCode.countryCodes[0]}</option>
							);
						})}
					</select>
                    <label className={fieldInUseOrFocus("phone") ? styles.lblFormGroupPhoneFocus : styles.lblFormGroup}>Phone Number</label>
                    <input className={styles.inputFormPhoneNumberGroup} id="phone-input" type="text" value={phoneNumber} onChange={(e) => handleChange(e, "phone")} />
				</div>
				<div className={styles.divFormGroupContainer} onFocus={() => animateLabels("userName")}>
					<label className={fieldInUseOrFocus("userName") ? styles.lblFormGroupFocus : styles.lblFormGroup}>User Name</label>
					<input className={styles.inputFormGroup} id="username-input" type="text" value={userName} onChange={(e) => handleChange(e, "userName")} />
				</div>
				<div className={styles.divFormGroupContainer} onFocus={() => animateLabels("email")}>
					<label className={fieldInUseOrFocus("email") ? styles.lblFormGroupFocus : styles.lblFormGroup}>Email Address</label>
					<input className={styles.inputFormGroup} autoComplete="new-password" id="email-input" type="email" value={email} onChange={(e) => handleChange(e, "email")} />
				</div>
				<div className={styles.divFormGroupContainer} onFocus={() => animateLabels("location")}>
					<label className={fieldInUseOrFocus("location") ? styles.lblFormGroupFocus : styles.lblFormGroup}>Location</label>
					<input className={styles.inputFormGroup} id="location-input" type="text" value={location} onChange={(e) => handleChange(e, "location")} />
				</div>
				<div className={styles.divFormGroupContainer} onFocus={() => animateLabels("password")}>
					<label className={fieldInUseOrFocus("password") ? styles.lblFormGroupFocus : styles.lblFormGroup}>Password</label>
					<input className={styles.inputFormGroup} autoComplete="new-password" id="password-input" type="password" value={password} onChange={(e) => handleChange(e, "password")} />
				</div>
				<div className={styles.divFormGroupContainer} onFocus={() => animateLabels("passwordConfirm")}>
					<label className={fieldInUseOrFocus("passwordConfirm") ? styles.lblFormGroupFocus : styles.lblFormGroup}>{fieldInUseOrFocus("passwordConfirm") ? "Confirm" : "Confirm Password"}</label>
					<input className={styles.inputFormGroup} autoComplete="new-password" id="confirm-password-input" type="password" value={passwordConfirm} onChange={(e) => handleChange(e, "passwordConfirm")} />
				</div>
				<Button
                    text="Register"
					textColor="white"
					textSize={20}
					backgroundColor="#0984AB"
					theme="primary"
					onClick={() => registerNewUser()}
					type="button"
					name="Ooush Button"
					borderRadius={8}
					height="10%"
					width="100%"
				/>
			</form>
            {registrationMessage
                && <div className={styles.registrationMessage}>
                        {registrationMessage}
                    </div>
            }
		</div>
	)
}

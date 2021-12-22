import React, {useEffect, useState} from "react"

import registerUser from "../../service/user/userService";

import Button from "../../src/components/common/button/button";
import OoushFieldInput from "../../src/components/common/ooush-input-field/ooushInputField";

import { COUNTRY_CODES } from "../../utils/login/loginUtils";
import {
    LOGIN_MESSAGE_TIMEOUT_MILLISECONDS,
    REGISTRATION_FORM_EMAIL_ADDRESS_NOT_VALID, REGISTRATION_FORM_PASSWORD_NOT_VALID
} from "../../utils/constants/ooush-constants";

import { validateEmail } from "../../utils/validation/validateEmail";

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
	const [passwordValidated, setPasswordValidated] = useState(false);
	const [fieldInFocus, setFieldInFocus] = useState("");
	const [fieldsWithContent, setFieldsWithContent] = useState(new Set<string>());
    const [registrationMessage, setRegistrationMessage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        validateFieldsForSubmission();
    })

	const registerNewUser = () => {
		let data = {
			email: email,
			password: password,
			phoneNumber: phoneNumber,
			userName: userName,
			firstName: firstName,
			lastName: lastName,
			location: location,
		};
        registerUser(data).then((response: any) => {
            displayNotification(response.body);
        }).catch((error: string)  => {
            displayNotification(error);
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

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
	    // @ts-ignore
        const clickOutside = e.target.id === "registerUserFormContainer";
	    if (clickOutside) {
            setFieldInFocus("");
        }
    }

	const animateLabels = (field: string) => {
		setFieldInFocus(field);
	}

	const fieldInUseOrFocus = (field: string) => {
	    return fieldInFocus === field || fieldsWithContent.has(field);
    }

    const validateFieldsForSubmission = () => {
        const passwordsMatch = password === passwordConfirm;
        const passwordValidated = password != "" && passwordsMatch;
        const emailValidated = validateEmail(email);

        setEmailValidated(email == "" || emailValidated);
        setPasswordValidated(password == "" || passwordValidated);

        if(passwordValidated && emailValidated && firstName && lastName && countryCode && phoneNumber && userName && location) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }

	return (
		<div className={styles.container} id="registerUserFormContainer" onClick={(e) => handleClickOutside(e)}>
			<form className={styles.formRegisterUser}>
                <OoushFieldInput
                    id="name-input"
                    fieldName="firstName"
                    fieldInFocus={fieldInFocus}
                    value={firstName}
                    fieldsWithContent={fieldsWithContent}
                    handleChange={handleChange}
                    animateLabels={() => animateLabels("firstName")}
                    labelValue="First Name"
                />
                <OoushFieldInput
                    id="last-name-input"
                    fieldName="lastName"
                    fieldInFocus={fieldInFocus}
                    value={lastName}
                    fieldsWithContent={fieldsWithContent}
                    handleChange={handleChange}
                    animateLabels={() => animateLabels("lastName")}
                    labelValue="Last Name"
                />
				<div className={styles.divFormGroupContainer} onFocus={() => animateLabels("phone")}>
					<select className={styles.inputFormCountryCodeGroup} id="phone-input" value={countryCode} onChange={(e) => handleChange(e, "countryCode")} >
						<option className={styles.hiddenSelectOption} hidden>Country Code</option>
						<option disabled defaultValue="true">Select Country Code</option>
						{COUNTRY_CODES.map(countryCode => {
							return (
								<option key={countryCode.country} value={countryCode.countryCodes[0]}>{countryCode.country + " " + countryCode.countryCodes[0]}</option>
							);
						})}
					</select>
                    <label className={fieldInUseOrFocus("phone") ? styles.lblFormGroupPhoneFocus : styles.lblFormGroup}>Phone Number</label>
                    <input className={styles.inputFormPhoneNumberGroup} id="phone-input" type="text" value={phoneNumber} onChange={(e) => handleChange(e, "phone")} />
				</div>
                <OoushFieldInput
                    id="username-input"
                    fieldName="userName"
                    fieldInFocus={fieldInFocus}
                    value={userName}
                    fieldsWithContent={fieldsWithContent}
                    handleChange={handleChange}
                    animateLabels={() => animateLabels("userName")}
                    labelValue="User Name"
                />
                <OoushFieldInput
                    id="email-input"
                    autoComplete="new-password"
                    fieldName="email" type="email"
                    fieldInFocus={fieldInFocus}
                    value={email}
                    fieldsWithContent={fieldsWithContent}
                    handleChange={handleChange}
                    animateLabels={() => animateLabels("email")}
                    labelValue="Email"
                />
                <OoushFieldInput
                    id="location-input"
                    fieldName="location"
                    fieldInFocus={fieldInFocus}
                    value={location}
                    fieldsWithContent={fieldsWithContent}
                    handleChange={handleChange}
                    animateLabels={() => animateLabels("location")}
                    labelValue="Location"
                />
                <OoushFieldInput
                    id="password-input"
                    fieldName="password"
                    autoComplete="new-password"
                    fieldInFocus={fieldInFocus}
                    value={password}
                    type="password"
                    fieldsWithContent={fieldsWithContent}
                    handleChange={handleChange}
                    animateLabels={() => animateLabels("password")}
                    labelValue="Password"
                />
                <OoushFieldInput
                    id="confirm-password-input"
                    fieldName="passwordConfirm"
                    fieldInFocus={fieldInFocus}
                    autoComplete="new-password"
                    value={passwordConfirm}
                    type="password"
                    fieldsWithContent={fieldsWithContent}
                    handleChange={handleChange}
                    animateLabels={() => animateLabels("passwordConfirm")}
                    labelValue="Confirm Password"
                />
				<Button
                    text="Register"
					textColor="white"
					textSize={20}
					backgroundColor={buttonDisabled ? "#666666" : "#0984AB"}
					theme="primary"
					onClick={() => registerNewUser()}
					type="button"
					name="Ooush Button"
					borderRadius={8}
					height="10%"
					width="100%"
                    cursor={buttonDisabled ? "context-menu" : "pointer"}
                    disabled={buttonDisabled}
				/>
			</form>
            {registrationMessage
                && <div className={styles.registrationMessage}>
                        {registrationMessage}
                    </div>
            }
            {!emailValidated
                && <div className={styles.registrationMessage}>
                        {REGISTRATION_FORM_EMAIL_ADDRESS_NOT_VALID}
                    </div>
            }
            {!passwordValidated
                && <div className={styles.registrationMessage}>
                        {REGISTRATION_FORM_PASSWORD_NOT_VALID}
                    </div>
            }
		</div>
	)
}

import React, {useEffect, useState} from "react";

import styles from "../../styles/registerUser.module.css";
import OoushFieldInput from "../../src/components/common/ooush-input-field/ooushInputField";
import {LOGIN_MESSAGE_TIMEOUT_MILLISECONDS, VERIFICATION_SUCCESS} from "../../utils/constants/ooush-constants";
import Button from "../../src/components/common/button/button";
import {validateEmail} from "../../utils/validation/validateEmail";

export default function Login() {

    const [fieldInFocus, setFieldInFocus] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fieldsWithContent, setFieldsWithContent] = useState(new Set<string>());
    const [loginMessage, setLoginMessage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        validateFieldsForLogin();
    })

    useEffect(() => {
        const verifySuccess = window.location.search;
        if (verifySuccess) {
            displayNotification(VERIFICATION_SUCCESS);
        }
    }, [])

    const validateFieldsForLogin = () => {
        if(email && password) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }

    const displayNotification = (message: string) => {
        setLoginMessage(message);
        setTimeout(() => {
            setLoginMessage("");
        }, LOGIN_MESSAGE_TIMEOUT_MILLISECONDS);
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

    const login = () => {

    }

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const clickOutside = e.target.id === "loginFormContainer";
        if (clickOutside) {
            setFieldInFocus("");
        }
    }

    const handleChange = (event: any, source: string) => {
        const value = event.target.value;
        switch (source) {
            case "email":
                addOrRemoveFieldsWithEntries(value.length, source);
                setEmail(value);
                break;
            case "password":
                addOrRemoveFieldsWithEntries(value.length, source);
                setPassword(value);
                break;
        }
    }

    const animateLabels = (field: string) => {
        setFieldInFocus(field);
    }

    const fieldInUseOrFocus = (field: string) => {
        return fieldInFocus === field || fieldsWithContent.has(field);
    }

    return (
        <div className={styles.loginContainer} id="loginFormContainer" onClick={(e) => handleClickOutside(e)}>
            <form className={styles.formLogin}>
                <OoushFieldInput
                    id="email-input"
                    fieldName="email"
                    fieldInFocus={fieldInFocus}
                    value={email}
                    fieldsWithContent={fieldsWithContent}
                    handleChange={handleChange}
                    animateLabels={() => animateLabels("email")}
                    labelValue="Email"
                />
                <OoushFieldInput
                    id="password-input"
                    fieldName="password"
                    fieldInFocus={fieldInFocus}
                    value={password}
                    fieldsWithContent={fieldsWithContent}
                    handleChange={handleChange}
                    animateLabels={() => animateLabels("password")}
                    labelValue="Password"
                />
                <Button
                    text="Register"
                    textColor="white"
                    textSize={20}
                    backgroundColor={buttonDisabled ? "#666666" : "#0984AB"}
                    theme="primary"
                    onClick={() => login()}
                    type="button"
                    name="Ooush Button"
                    borderRadius={8}
                    height="10%"
                    width="100%"
                    cursor={buttonDisabled ? "context-menu" : "pointer"}
                    disabled={buttonDisabled}
                />
            </form>
            {loginMessage
                && <div className={styles.loginMessage}>
                        {loginMessage}
                    </div>
            }
        </div>
    )
}
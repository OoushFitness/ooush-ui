import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../../auth/AuthContexts";

import OoushFieldInput from "../../src/components/common/ooush-input-field/ooushInputField";
import Button from "../../src/components/common/button/button";

import { login } from "../../service/auth/authService";

import {
  VERIFICATION_SUCCESS,
  LOGIN_MESSAGE_TIMEOUT_MILLISECONDS,
} from "../../utils/constants/ooush-constants";

import styles from "../../styles/login.module.css";
import LoadingSpinnerSmall from "../../src/components/loading-spinners/loadingSpinnerSmall";

export default function Login() {
  // @ts-ignore
  const { saveUserTokenAndUser } = useContext(AuthContext);

  const router = useRouter();

  const [fieldInFocus, setFieldInFocus] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fieldsWithContent, setFieldsWithContent] = useState(new Set<string>());
  const [loginMessage, setLoginMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    validateFieldsForLogin();
  });

  useEffect(() => {
    const verifySuccess = window.location.search;
    if (verifySuccess) {
      displayNotification(VERIFICATION_SUCCESS);
    }
  }, []);

  const validateFieldsForLogin = () => {
    if (userName && password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const displayNotification = (message: string) => {
    setLoginMessage(message);
    setTimeout(() => {
      setLoginMessage("");
    }, LOGIN_MESSAGE_TIMEOUT_MILLISECONDS);
  };

  const addOrRemoveFieldsWithEntries = (
    entryLength: number,
    source: string
  ) => {
    if (entryLength > 0) {
      const updatedFields = fieldsWithContent.add(source);
      setFieldsWithContent(updatedFields);
    } else {
      const removedFields = fieldsWithContent;
      const fieldWasRemoved = removedFields.delete(source);
      if (fieldWasRemoved) {
        setFieldsWithContent(removedFields);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !buttonDisabled) {
      loginPlatformUser();
    }
  };

  const loginPlatformUser = () => {
    setLoading(true);
    const params = {
      userName: userName,
      password: password,
    };
    login(params)
      .then((response: any) => {
        setLoading(false);
        let userLogin = response;
        saveUserTokenAndUser(userLogin);
        if (userLogin) {
          if (userLogin.success) {
            router.push("/dashboard").then((r) => {});
          } else {
            displayNotification(userLogin.loginMessage);
          }
        }
      })
      .catch((error: any) => {
        setLoading(false);
        console.error(error);
      });
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const clickOutside = e.target.id === "loginFormContainer";
    if (clickOutside) {
      setFieldInFocus("");
    }
  };

  const handleChange = (event: any, source: string) => {
    const value = event.target.value;
    switch (source) {
      case "username":
        addOrRemoveFieldsWithEntries(value.length, source);
        setUserName(value);
        break;
      case "password":
        addOrRemoveFieldsWithEntries(value.length, source);
        setPassword(value);
        break;
    }
  };

  const animateLabels = (field: string) => {
    setFieldInFocus(field);
  };

  return (
    <div
      className={styles.loginContainer}
      id="loginFormContainer"
      onClick={(e) => handleClickOutside(e)}
    >
      <form className={styles.formLogin}>
        <OoushFieldInput
          id="username-input"
          fieldName="username"
          fieldInFocus={fieldInFocus}
          value={userName}
          fieldsWithContent={fieldsWithContent}
          handleChange={handleChange}
          animateLabels={() => animateLabels("username")}
          labelValue="User Name"
          type="text"
          autoComplete="text"
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
          type="password"
          autoComplete="password"
          handleKeyDown={handleKeyDown}
        />
        {loading ? (
          <LoadingSpinnerSmall />
        ) : (
          <Button
            text="Login"
            textColor="white"
            textSize={20}
            backgroundColor={buttonDisabled ? "#666666" : ""}
            theme="primary"
            onClick={() => loginPlatformUser()}
            type="button"
            name="Ooush Button"
            borderRadius={20}
            height="10%"
            width="100%"
            cursor={buttonDisabled ? "context-menu" : "pointer"}
            disabled={buttonDisabled}
          />
        )}
      </form>
      {loginMessage && (
        <div className={styles.loginMessage}>{loginMessage}</div>
      )}
    </div>
  );
}

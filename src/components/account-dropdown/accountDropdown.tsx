import React, { useContext, useEffect, useState } from "react";
import { logout } from "../../../service/auth/authService";
import { AuthContext } from "../../../auth/AuthContexts";
import { useRouter } from "next/router";
import { getUserSettings, updateUserSettings } from "../../../service/user/userService"
import OoushSlidingToggle from "../ooush-sliding-toggle/ooushSlidingToggle";
import { OoushUserSettings } from "../../interfaces/commonInterfaces";

import styles from "./accountDropdown.module.scss";

export interface AccountDropdownProps {
    toggleAccountDropdown: (showAccountDropdown : boolean) => void;
    openSettingsModal: (modalContent: React.ReactNode) => void;
    closeSettingsModal: () => void;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({toggleAccountDropdown, openSettingsModal, closeSettingsModal}) => {
    // @ts-ignore
    const { clearUserTokenAndUser, updateAppUserSettings } = useContext(AuthContext);
    const router = useRouter();

    const [userSettings, setUserSettings] = useState({} as OoushUserSettings);

    useEffect(() => {
        handleGetUserSettings();
    }, []);

    const handleGetUserSettings = () => {
        getUserSettings().then(response => {
            setUserSettings(response);
        }).catch(error => {
            console.error(error);
        })
    }

    const handleUpdateUserSettings = (settings: object) => {
        updateUserSettings(settings).then((response: OoushUserSettings) => {
            updateAppUserSettings(response);
        })
    }

    const handleLogout = () => {
        closeSettingsModal();
        logout().then(() => {
            clearUserTokenAndUser();
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            toggleAccountDropdown(false);
            router.push('login');
        })
    }

    const handleMouseLeaveAccountDropdown = () => {
        toggleAccountDropdown(false);
    }

    const userSettingsModalContent = <div>
        <OoushSlidingToggle
            label={"Weight Denomination"}
            leftValue={"kg"}
            rightValue={"lbs"}
            toggleApi={handleUpdateUserSettings}
            databaseValue={userSettings.weightDenomination}
        />
    </div>

    return (
        <div className={styles.accountDropdownContainer} onMouseLeave={handleMouseLeaveAccountDropdown}>
            <div className={styles.accountDropdownItem} onClick={() => openSettingsModal(userSettingsModalContent)}>
                SETTINGS
            </div>
            <div className={styles.accountDropdownItem} onClick={handleLogout}>
                LOGOUT
            </div>
        </div>
    )
};

export default AccountDropdown;

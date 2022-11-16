import React, { useContext } from "react";
import {logout} from "../../../service/auth/authService";
import {AuthContext} from "../../../auth/AuthContexts";
import {useRouter} from "next/router";

import styles from "./accountDropdown.module.scss";

export interface AccountDropdownProps {
    toggleAccountDropdown: (showAccountDropdown : boolean) => void;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({toggleAccountDropdown}) => {
    // @ts-ignore
    const { clearUserTokenAndUser } = useContext(AuthContext);

    const router = useRouter();

    const handleLogout = () => {
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

    return (
        <div className={styles.accountDropdownContainer} onMouseLeave={handleMouseLeaveAccountDropdown}>
            <div className={styles.accountDropdownItem} onClick={handleLogout}>
                Logout
            </div>
        </div>
    )
};

export default AccountDropdown;

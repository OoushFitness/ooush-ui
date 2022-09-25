import React, {useContext, useState} from "react";
import Navigation, { NavigationProps } from "../navigation/navigation";
import {NAV_ITEMS} from "../../../utils/constants/ooush-constants";
import styles from "./layout.module.scss";
import {AuthContext} from "../../../auth/AuthContexts";
import AccountDropdown from "../account-dropdown/accountDropdown";

const Layout: React.FC = ({ children }) => {

    const [showAccountDropdown, setShowAccountDropdown] = useState(false)
    const toggleAccountDropdown = (showAccountDropdown: boolean) => {
        setShowAccountDropdown(showAccountDropdown);
    }

    // @ts-ignore
    const { user } = useContext(AuthContext);
    const navItems = user?.authenticated ? NAV_ITEMS.filter(navItem => navItem.authenticatedOnly) : NAV_ITEMS.filter(navItem => !navItem.authenticatedOnly)

    return (
        <div className={styles.layout}>
            <Navigation navItems={navItems} toggleAccountDropdown={toggleAccountDropdown} />
            {showAccountDropdown && <AccountDropdown toggleAccountDropdown={toggleAccountDropdown} />}
            {children && children}
        </div>
    )
}

export default Layout;

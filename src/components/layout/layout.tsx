import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth/AuthContexts";
import AccountDropdown from "../account-dropdown/accountDropdown";
import OoushModal from "../ooush-modal/ooushModal";
import Navigation from "../navigation/navigation";
import { NAV_ITEMS } from "../../../utils/constants/ooush-constants";

import styles from "./layout.module.scss";

const Layout: React.FC = ({ children }) => {

    const [showAccountDropdown, setShowAccountDropdown] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>();

    // @ts-ignore
    const { user } = useContext(AuthContext);
    const navItems = user?.authenticated ? NAV_ITEMS.filter(navItem => navItem.authenticatedOnly) : NAV_ITEMS.filter(navItem => !navItem.authenticatedOnly)

    const toggleAccountDropdown = (showAccountDropdown: boolean) => {
        setShowAccountDropdown(showAccountDropdown);
    }

    const openModal = (modalContent: React.ReactNode) => {
        setShowModal(true);
        setModalContent(modalContent)
    } 

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className={styles.layout}>
            <Navigation navItems={navItems} toggleAccountDropdown={toggleAccountDropdown} />
            {showAccountDropdown
                && <AccountDropdown
                        toggleAccountDropdown={toggleAccountDropdown}
                        openSettingsModal={openModal}
                        closeSettingsModal={closeModal}
                    />
            }
            {children && children}
            {showModal
                && <OoushModal
                        modalTitle={"User Settings"}
                        simpleModalControls
                        jsxContent={modalContent}
                        closeModalHandler={closeModal}
                    />
            }
        </div>
    )
}

export default Layout;

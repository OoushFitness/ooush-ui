import React, {MouseEventHandler, useContext, useState} from "react";
import Link from "next/link";
import styles from "./navigation.module.scss";
import {NAVIGATION_ITEM_ACCOUNT} from "../../../utils/constants/ooush-constants";

interface NavigationItem {
    authenticatedOnly: boolean,
    text: string;
    title: string;
    url: string;
    icon: string;
}

export interface NavigationProps {
    navItems: NavigationItem[];
    toggleAccountDropdown: (showAccountDropdown : boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ navItems , toggleAccountDropdown}) => {

    const handleMouseOverAccountDropdown = (item : NavigationItem) => {
        if (item.text === NAVIGATION_ITEM_ACCOUNT) {
            toggleAccountDropdown(true);
        } else {
            toggleAccountDropdown(false);
        }
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbar_container}>
                    <ul className={styles.navbar_menu_list}>
                        {navItems && navItems.map((item, index) => (
                            <li
                                key={index}
                                className={styles.navbar_menu_item}
                                onMouseEnter={() => handleMouseOverAccountDropdown(item)}
                            >
                                <Link href={item.url}>
                                    <a className={styles.navbar_menu_link}>
                                        <h4>{item.text}</h4>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className={styles.spacer}></div>
        </>
    )
};

export default Navigation;

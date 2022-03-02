import React from "react";
import Link from "next/link";
import styles from "./navigation.module.scss";

interface NavigationItem {
    text: string;
    title: string;
    url: string;
    icon: string;
}

export interface NavigationProps {
    navItems: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbar_container}>
                    <ul className={styles.navbar_menu_list}>
                        {navItems && navItems.map((item, index) => (
                            <li key={index} className={styles.navbar_menu_item}>
                                <Link href={item.url}>
                                    <a className={styles.navbar_menu_link}>
                                        {item.text}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        <li key="login" className={styles.navbar_menu_item}>
                                <Link href="/login">
                                    <a className={styles.navbar_menu_link}>
                                        Login
                                    </a>
                                </Link>
                            </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.spacer}></div>
        </>
    )
};

export default Navigation;

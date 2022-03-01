import { useRouter } from "next/router";
import React from "react";
import Navigation, { NavigationProps } from "../navigation/navigation";
import styles from "./layout.module.scss";

const Layout: React.FC = ({ children }) => {
    const router = useRouter()
    const getNavItems = () => {
        if (router.pathname === "/") {
            return [
                {
                    text: "About",
                    title: "About",
                    url: "/about",
                    icon: "about"
                },
                {
                    text: "Login",
                    title: "Login",
                    url: "/login",
                    icon: "login"
                }
            ]
        } else {
            return [
                {
                    text: "Home",
                    title: "Home",
                    url: "/",
                    icon: "home"
                },
                {
                    text: "Dashboard",
                    title: "Dashboard",
                    url: "/dashboard",
                    icon: "dashboard"
                },
                {
                    text: "Routines",
                    title: "Routines",
                    url: "/routines",
                    icon: "routines"
                },
                {
                    text: "Logout",
                    title: "logout",
                    url: "/logout",
                    icon: "logout"
                }
            ]
        }
    }
    return (
        <div className={styles.layout}>
            <Navigation navItems={getNavItems()} />
            {children && children}
        </div>
    )
}

export default Layout;

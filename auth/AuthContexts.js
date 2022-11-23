import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from "next/router";
import { verify } from "../service/auth/authService";
import { deepCloneObject } from '../utils/object-helpers/object-helpers';
import { UNAUTHENTICATED_URLS } from "../utils/constants/ooush-constants";
import storageService from "../service/storage/storageService";
import Cookies from 'js-cookie';
import LoadingPage from '../pages/loading/loading'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState({authenticated: false});
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setLoading(true);
		async function loadUserFromCookies() {
			const token = Cookies.get('token');
			verify(token).then(response => {
				setUser(response);
				if (!response.success) {
					router.push('login');
				};
			}).catch(error => {
				console.error(error);
			});
		};
		if (typeof window !== undefined && !UNAUTHENTICATED_URLS.includes(window.location.pathname)) {
			loadUserFromCookies().then(() => {
				setLoading(false);
			});
		} else {
			setLoading(false);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const saveUserTokenAndUser = (user) => {
		setUser(user)
		const token = user.token;
		storageService.saveToken(token);
		if (token) {
			Cookies.set('token', token, { expires: 60 });
		}
	}

	const clearUserTokenAndUser = () => {
		setUser(null);
		storageService.clearToken();
		Cookies.remove('token');
	}

    const updateAppUserSettings = (userSettings) => {
        let statefulUser = deepCloneObject(user);
        for (let key of Object.keys(userSettings)) {
            statefulUser[key] = userSettings[key];
        }
        setUser(statefulUser);
    }

	return (
		<AuthContext.Provider
            value={{
                isAuthenticated: user?.authenticated,
                user,
                loading,
                saveUserTokenAndUser,
                clearUserTokenAndUser,
                updateAppUserSettings
            }}
        >
			{children}
		</AuthContext.Provider>
	)

}

const isAuthenticatedOnAuthRequiredPage = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { isAuthenticated } = useAuth();
	if(typeof window !== undefined) {
		return (!isAuthenticated && !UNAUTHENTICATED_URLS.includes(window.location.pathname));
	}
	return false;
}

export const ProtectRoute = ({ children }) => {
	const { loading } = useAuth();
	if (loading || !isAuthenticatedOnAuthRequiredPage){
		return <LoadingPage />;
	}
	return children;
};

export const useAuth = () => useContext(AuthContext);
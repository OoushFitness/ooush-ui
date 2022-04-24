import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

import LoadingPage from '../pages/loading/loading'

import { useRouter } from "next/router";
import {login, verify} from "../service/auth/authService";
import storageService from "../service/storage/storageService";
import {UNAUTHENTICATED_URLS} from "../utils/constants/ooush-constants";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState({authenticated: false});
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	useEffect(() => {
		if(typeof window !== undefined && !UNAUTHENTICATED_URLS.includes(window.location.pathname)) {
			setLoading(true);
			async function loadUserFromCookies() {
				const token = Cookies.get('token');
				verify(token).then(response => {
					setUser(response);
					if (!response.success) {
						router.push('login');
					}
					;
				}).catch(error => {
					console.error(error);
				});
				setLoading(false);
			};
			loadUserFromCookies();
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

	return (
		<AuthContext.Provider value={{ isAuthenticated: user?.authenticated, user, loading, saveUserTokenAndUser, clearUserTokenAndUser}}>
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
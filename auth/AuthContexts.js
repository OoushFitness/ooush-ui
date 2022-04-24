import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

import LoadingPage from '../pages/loading/loading'

import { useRouter } from "next/router";
import {login, verify} from "../service/auth/authService";
import storageService from "../service/storage/storageService";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
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
			setLoading(false);
		}
		loadUserFromCookies();
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
		console.log("I'm here")
		setUser(null);
		storageService.clearToken();
		Cookies.remove('token');
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated: !!user, user, loading, saveUserTokenAndUser, clearUserTokenAndUser}}>
			{children}
		</AuthContext.Provider>
	)

}

const isAuthenticatedOnAuthRequiredPage = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { isAuthenticated } = useAuth();
	if(typeof window !== "undefined") {
		return (!isAuthenticated && window.location.pathname !== '/login');
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
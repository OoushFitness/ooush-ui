import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

import LoadingPage from '../pages/loading/loading'

import Router, { useRouter } from "next/router";
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
			let user = {};
			if (token) {
				verify(token).then(response => {
					user = response;
				}).catch(error => {
					console.error(error);
				});
				if (user) {
					setUser(user);
				}
			} else {
				router.push('login');
			}
			setLoading(false);
		}
		loadUserFromCookies();
	}, []);

	const loginUser = (data) => {
		let userLogin = {};
		let token = "";
		login(data).then(response => {
			userLogin = response.data;
			console.log(userLogin)
			token = userLogin.token;
			storageService.saveToken(token);
			setUser(userLogin);
			if (token) {
				Cookies.set('token', token, { expires: 60 });
			}
		}).catch(error => {
			console.error(error);
		});
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated: !!user, user, loading, loginUser}}>
			{children}
		</AuthContext.Provider>
	)

}

const isAuthenticatedOnAuthRequiredPage = () => {
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
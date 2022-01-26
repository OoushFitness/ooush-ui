import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import Router, { useRouter } from "next/router";
import {login, verify} from "../service/auth/authService";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

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
			}
			setLoading(false);
		}
		loadUserFromCookies();
	}, []);

	const loginUser = (data) => {
		let user = {};
		let token = "";
		login(data).then(response => {
			user = response;
			token = response.token;
		}).catch(error => {
			console.error(error);
		});
		if (token) {
			Cookies.set('token', token, { expires: 60 });
			setUser(user);
		}
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated: !!user, user, loading, loginUser}}>
			{children}
		</AuthContext.Provider>
	)

}
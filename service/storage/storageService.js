// @flow
class StorageService {
	saveToken = token => localStorage.setItem("Token", token);

	tokenExists = () => !!this.getToken();

	getToken = () => localStorage.getItem("Token");

	clearToken = () => localStorage.removeItem("Token");

	clearAll = () => localStorage.clear();

}

export default new StorageService();
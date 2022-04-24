import storageService from "../../service/storage/storageService";

const apiGetHelper = (url) => {
    return fetch('http://localhost:8080/' + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
			...(storageService.getToken() && { 'X-Auth-Token': storageService.getToken() }),
        },
    })
}

export default apiGetHelper;
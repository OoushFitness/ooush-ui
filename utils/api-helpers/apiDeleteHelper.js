import storageService from "../../service/storage/storageService";

const apiDeleteHelper = (url) => {
    return fetch('http://localhost:8080/' + url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...(storageService.getToken() && { 'X-Auth-Token': storageService.getToken() }),
        },
    })
}

export default apiDeleteHelper;
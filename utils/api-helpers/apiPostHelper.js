import storageService from "../../service/storage/storageService";

const apiPostHelper = (url, data) => {
    return fetch('http://localhost:8080/' + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(storageService.getToken() && { 'X-Auth-Token': storageService.getToken() }),
        },
        body: JSON.stringify(data)
    })
}

export default apiPostHelper;
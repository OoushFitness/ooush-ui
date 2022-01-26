const apiGetHelper = (url: string) => {
    return fetch('http://localhost:8080/' + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export default apiGetHelper;
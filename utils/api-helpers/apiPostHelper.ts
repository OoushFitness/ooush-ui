const apiPostHelper = (url: string, data: object) => {
    return fetch('http://localhost:8080/' + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export default apiPostHelper;
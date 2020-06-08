import axios from 'axios'

const ApiClient = {
    http: axios.create({
            baseURL: 'http://127.0.0.1:1984/'
        }),

    get(url) {
        return this.http({
            url,
            method: "GET"
        })
    },

    post(url, data) {
        return this.http({
            url,
            data,
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}

export default ApiClient
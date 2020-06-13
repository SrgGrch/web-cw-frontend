import axios from 'axios'
import Cookies from "universal-cookie";

const ApiClient = {
    http: axios.create({
        baseURL: 'http://127.0.0.1:1984/',
    }),

    get(url, isAuthRequired = false) {
        return this.http({
            url,
            method: 'GET',
            headers: {
                Authentication: (new Cookies()).get('authToken')
            }
        })
    },

    post(url, data, isAuthRequired = false) {
        return this.http({
            method: 'POST',
            url: url,
            data: data,
            headers: {
                Authentication: (new Cookies()).get('authToken')
            }
        })
    },
}

export default ApiClient

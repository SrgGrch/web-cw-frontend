import axios from 'axios'
import Cookies from "universal-cookie";

const ApiClient = {
    http: axios.create({
        baseURL: 'https://bluredu-backend.herokuapp.com/',
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

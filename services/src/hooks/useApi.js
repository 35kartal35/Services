import axios from "axios"

export default function useApi() {
    axios.defaults.baseURL = 'http://api.adoptezlartisan.com'
    return axios
}
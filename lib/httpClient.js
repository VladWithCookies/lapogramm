import axios from 'axios'
import Cookies from 'cookies'
import { API_URL, PROXY_URL } from 'constants/api'

const httpClient = (context = {}) => {
  if (typeof window === 'undefined') {
    const { req, res } = context;
    const cookies = new Cookies(req, res)
    const token = cookies.get('token') || ''

    return axios.create({
      baseURL: API_URL,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  } else {
    return axios.create({ baseURL: PROXY_URL })
  }
}

export default httpClient

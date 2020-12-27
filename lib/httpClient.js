import axios from 'axios'

import { API_URL } from 'constants/api'

const httpClient = axios.create({
  baseURL: API_URL,
  withCredential: true,
})

export default httpClient

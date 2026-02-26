import axios from 'axios'
import { API_URL } from '@/config/env'

const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message || error?.message || 'Невідома помилка API.'
    return Promise.reject(new Error(message))
  },
)

export default api

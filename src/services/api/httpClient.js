import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message || error?.message || 'Невідома помилка API.'
    return Promise.reject(new Error(message))
  },
)

export default api

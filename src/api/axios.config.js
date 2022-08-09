import axios from 'axios'

export const app = axios.create({ baseURL: process.env.REACT_APP_BACK || 'http://localhost:5005/api' })

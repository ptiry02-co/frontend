import axios from 'axios'

export const app = axios.create({ baseURL: process.env.REACT_APP_BACK })

export const apiCall = axios.create({ baseURL: process.env.REACT_APP_EXERCISEDB })

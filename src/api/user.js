import { app } from './axios.config'

export const createUser = data => app.post('/auth/signup', data)

export const postUser = data => app.post('/auth/login', data)

export const verifyUser = token => app.get('/auth/verify', { headers: { authorization: `Bearer ${token}` } })

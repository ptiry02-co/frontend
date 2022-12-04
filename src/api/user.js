import { app } from './axios.config'

export const createUser = data => app.post('/signup', data)

export const postUser = data => app.post('/login', data)

export const verifyUser = token => app.get('/verify', { headers: { authorization: `Bearer ${token}` } })

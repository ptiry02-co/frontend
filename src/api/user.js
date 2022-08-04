import { app } from './axios.config'

export const postSignUp = data => app.post('/auth/signup', data)

export const getVerifyUser = () => app.get('/auth/verify')

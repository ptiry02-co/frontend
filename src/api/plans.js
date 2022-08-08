import { app } from './axios.config'

export const getPlans = token => app.get('/plans', { headers: { authorization: `Bearer ${token}` } })

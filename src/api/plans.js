import { app } from './axios.config'

export const getPlans = token => app.get('/plans', { headers: { authorization: `Bearer ${token}` } })

export const newPlan = (data, token) => app.post('/plans', data, { headers: { authorization: `Bearer ${token}` } })

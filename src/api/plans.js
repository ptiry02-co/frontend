import { app } from './axios.config'

const token = localStorage.getItem('authToken')

export const getPlans = () => app.get('/plans', { headers: { authorization: `Bearer ${token}` } })

export const newPlan = data => app.post('/plans', data, { headers: { authorization: `Bearer ${token}` } })

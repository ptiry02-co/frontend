import { app } from './axios.config'

export const getPlans = data => app.get('/plans', { headers: { authorization: `Bearer ${data.token}` } })

export const postPlan = data => app.post('/plans', data.plan, { headers: { authorization: `Bearer ${data.token}` } })

export const putPlan = data =>
  app.put(`/plans/${data.planId}`, data.plan, { headers: { authorization: `Bearer ${data.token}` } })

export const remove = data =>
  app.delete(`/plans/${data.planId}`, { headers: { authorization: `Bearer ${data.token}` } })

export const getPlan = data => app.get(`/plans/${data.planId}`, { headers: { authorization: `Bearer ${data.token}` } })

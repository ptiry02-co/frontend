import { api, app } from './axios.config'

export const getAllExercises = () => api.get('/exercises')

export const postExercise = data =>
  app.post('/exercises/new', data, { headers: { authorization: `Bearer ${data.token}` } })

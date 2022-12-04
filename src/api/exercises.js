import { api, app } from './axios.config'

export const getAllExercises = () => api.get('/exercises')

export const removeExercise = data =>
  app.delete(`/exercises/${data.exerciseId}`, { headers: { authorization: `Bearer ${data.token}` } })

export const postExercise = data => app.post('/exercises', data, { headers: { authorization: `Bearer ${data.token}` } })

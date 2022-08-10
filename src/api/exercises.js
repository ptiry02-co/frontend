import { apiCall } from './axios.config'

export const getAllExercises = () =>
  apiCall.get('/exercises', {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  })

import axios from 'axios'

export const app = axios.create({ baseURL: process.env.REACT_APP_BACK })

export const api = axios.create({
  baseURL: process.env.REACT_APP_EXERCISEDB,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
})

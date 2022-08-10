import { useEffect, useState } from 'react'
import { getAllExercises } from '../api/exercises'

const useExercises = () => {
  const [list, setList] = useState([])

  const fetchAllExercises = async () => {
    try {
      const res = await getAllExercises()
      setList(res.data)
    } catch (error) {
      console.log('Error fetching exercises: ', error)
    }
  }

  useEffect(() => {
    fetchAllExercises()
  }, [])

  return { list }
}
export default useExercises

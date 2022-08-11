import { useState } from 'react'
import { getAllExercises, postExercise, removeExercise } from '../api/exercises'

const useExercises = () => {
  const [list, setList] = useState([])

  const bodyPartGroups = {
    'upper body': ['chest', 'neck', 'shoulders'],
    arms: ['lower arms', 'upper arms'],
    core: ['waist'],
    back: ['back'],
    legs: ['lower legs', 'upper legs'],
    cardio: ['cardio']
  }

  const fetchAllExercises = async () => {
    try {
      const res = await getAllExercises()
      setList(res.data)
      return res.data
    } catch (error) {
      console.log('Error fetching exercises: ', error)
    }
  }

  const newExercise = async data => {
    const token = localStorage.getItem('authToken')
    try {
      await postExercise({ ...data, token })
    } catch (error) {
      console.log('Error adding new exercise: ', error)
    }
  }

  const deleteExercise = async data => {
    const token = localStorage.getItem('authToken')
    try {
      await removeExercise({ ...data, token })
    } catch (error) {
      console.log('Error deleting exercise: ', error)
    }
  }

  const filterByBodyPart = (list, planType) => {
    let finalList = []
    bodyPartGroups[planType.toLowerCase()].forEach(bp => {
      finalList = [...finalList, ...list.filter(item => item.bodyPart === bp)]
    })
    setList(finalList)
  }

  return { list, fetchAllExercises, newExercise, filterByBodyPart, deleteExercise }
}
export default useExercises

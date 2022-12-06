import { useState } from 'react'
import { getPlan, getPlans, postPlan, putPlan, remove } from '../api/plans'

const usePlans = () => {
  const [plansData, setPlansData] = useState({})
  const [plan, setPlan] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const fetchPlans = async () => {
    setIsLoading(true)
    const token = localStorage.getItem('authToken')
    try {
      const res = await getPlans({ token })
      setPlansData(res.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('Error fetching Plans: ', error)
    }
  }

  const addPlan = async data => {
    setIsLoading(true)
    const token = localStorage.getItem('authToken')
    try {
      await postPlan({ ...data, token })
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('Error creating plan: ', error)
    }
  }

  const editPlan = async data => {
    setIsLoading(true)
    const token = localStorage.getItem('authToken')
    try {
      await putPlan({ ...data, token })
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('Error editing plan: ', error)
    }
  }

  const deletePlan = async data => {
    setIsLoading(true)
    const token = localStorage.getItem('authToken')
    try {
      await remove({ ...data, token })
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('Error deleting plan: ', error)
    }
  }

  const fetchPlan = async data => {
    setIsLoading(true)
    const token = localStorage.getItem('authToken')
    try {
      const res = await getPlan({ ...data, token })
      setPlan(res.data)
      setIsLoading(false)
      return res.data
    } catch (error) {
      setIsLoading(false)
      console.log('Error fetching plan details: ', error)
    }
  }

  return { plan, plansData, addPlan, fetchPlans, editPlan, deletePlan, fetchPlan, isLoading }
}
export default usePlans

import { useEffect, useState } from 'react'
import { getPlans, newPlan } from '../api/plans'

const usePlans = () => {
  const [plansData, setPlansData] = useState({})

  const fetchPlans = async () => {
    const token = localStorage.getItem('authToken')
    try {
      const res = await getPlans(token)
      setPlansData(res.data)
    } catch (error) {
      console.log('Error fetching Plans: ', error)
    }
  }
  const addPlan = async data => {
    const token = localStorage.getItem('authToken')
    try {
      await newPlan(data, token)
    } catch (error) {
      console.log('Error creating plan: ', error)
    }
  }

  useEffect(() => {
    fetchPlans()
  }, [])

  return { plansData, addPlan, fetchPlans }
}
export default usePlans

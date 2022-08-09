import { useState } from 'react'
import { getPlans, newPlan } from '../api/plans'

const usePlans = () => {
  const [plansData, setPlansData] = useState({})
  const fetchPlans = async () => {
    try {
      const res = await getPlans()
      setPlansData(res.data)
    } catch (error) {
      console.log('Error fetching Plans: ', error)
    }
  }
  const addPlan = async data => {
    try {
      const res = await newPlan(data)
      setPlansData(res.data)
    } catch (error) {
      console.log('Error creating plan: ', error)
    }
  }
  return { plansData, addPlan, fetchPlans }
}
export default usePlans

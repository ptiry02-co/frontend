import { useEffect, useState } from 'react'
import { getPlan, getPlans, postPlan, putPlan, remove } from '../api/plans'

const usePlans = () => {
  const [plansData, setPlansData] = useState({})

  const fetchPlans = async () => {
    const token = localStorage.getItem('authToken')
    try {
      const res = await getPlans({ token })
      setPlansData(res.data)
    } catch (error) {
      console.log('Error fetching Plans: ', error)
    }
  }

  const addPlan = async data => {
    const token = localStorage.getItem('authToken')
    try {
      await postPlan({ ...data, token })
    } catch (error) {
      console.log('Error creating plan: ', error)
    }
  }

  const editPlan = async data => {
    const token = localStorage.getItem('authToken')
    try {
      await putPlan({ ...data, token })
    } catch (error) {
      console.log('Error editing plan: ', error)
    }
  }

  const deletePlan = async data => {
    const token = localStorage.getItem('authToken')
    try {
      await remove({ ...data, token })
    } catch (error) {
      console.log('Error deleting plan: ', error)
    }
  }

  const fetchPlan = async data => {
    const token = localStorage.getItem('authToken')
    try {
      const res = await getPlan({ ...data, token })
      return res.data
    } catch (error) {
      console.log('Error fetching plan details: ', error)
    }
  }

  useEffect(() => {
    fetchPlans()
  }, [])

  return { plansData, addPlan, fetchPlans, editPlan, deletePlan, fetchPlan }
}
export default usePlans

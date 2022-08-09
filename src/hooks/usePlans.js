import { useEffect, useState } from 'react'
import { getPlan, getPlans, postPlan, putPlan, remove } from '../api/plans'

const token = localStorage.getItem('authToken')

const usePlans = () => {
  const [plansData, setPlansData] = useState({})

  const fetchPlans = async () => {
    try {
      const res = await getPlans({ token })
      setPlansData(res.data)
    } catch (error) {
      console.log('Error fetching Plans: ', error)
    }
  }

  const addPlan = async data => {
    try {
      await postPlan({ ...data, token })
    } catch (error) {
      console.log('Error creating plan: ', error)
    }
  }

  const editPlan = async data => {
    try {
      await putPlan({ ...data, token })
    } catch (error) {
      console.log('Error editing plan: ', error)
    }
  }

  const deletePlan = async data => {
    try {
      await remove({ ...data, token })
    } catch (error) {
      console.log('Error deleting plan: ', error)
    }
  }

  const fetchPlan = async data => {
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

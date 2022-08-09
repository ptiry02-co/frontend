import { useCallback, useEffect, useState } from 'react'
import { getPlans, postPlan, putPlan, remove } from '../api/plans'

const usePlans = () => {
  const [plansData, setPlansData] = useState({})
  const token = localStorage.getItem('authToken')

  const fetchPlans = useCallback(async () => {
    try {
      const res = await getPlans({ token })
      setPlansData(res.data)
    } catch (error) {
      console.log('Error fetching Plans: ', error)
    }
  }, [token])

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

  useEffect(() => {
    fetchPlans()
  }, [fetchPlans])

  return { plansData, addPlan, fetchPlans, editPlan, deletePlan }
}
export default usePlans

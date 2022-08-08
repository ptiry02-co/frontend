import { useEffect, useState } from 'react'
import { getPlans } from '../api/plans'

const usePlans = token => {
  const [plansData, setPlansData] = useState([])
  const fetchPlans = async () => {
    if (!token) return
    try {
      const res = await getPlans(token)
      setPlansData(res.data)
    } catch (error) {
      console.log('Error fetching Plans: ', error)
    }
  }
  useEffect(() => {
    fetchPlans()
  }, [])
  return { plansData }
}
export default usePlans

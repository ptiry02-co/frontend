import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import usePlans from '../hooks/usePlans'

const PlanDetail = () => {
  const [plan, setPlan] = useState({})
  const { planId } = useParams()
  const { fetchPlan } = usePlans()

  useEffect(() => {
    fetchPlan({ planId }).then(details => setPlan(details))
  }, [planId])

  return (
    <Wrapper>
      <h1>{plan.name?.toUpperCase()}</h1>
      <h3>{plan.day}</h3>
      <h3>{plan.type}</h3>
      <p>{plan.description}</p>
    </Wrapper>
  )
}

export default PlanDetail

const Wrapper = styled.div`
  align-self: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

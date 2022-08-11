import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Box from '../components/helpers/Box'
import GridContainer from '../components/helpers/GridContainer'
import usePlans from '../hooks/usePlans'

const PlanDetail = () => {
  const { planId } = useParams()
  const { plan, fetchPlan } = usePlans()

  useEffect(() => {
    fetchPlan({ planId })
  }, [planId])

  return (
    <Wrapper>
      <h1>{plan.name?.toUpperCase()}</h1>
      <h3>{plan.day}</h3>
      <h3>{plan.type}</h3>
      <p>{plan.description}</p>
      <GridContainer>
        {plan.exercises?.map(item => (
          <Box key={item._id}>
            <Reps>
              <h4>Sets: {item.sets}</h4>
              <h4>Reps: {item.reps}</h4>
            </Reps>
            <Gif src={item.gif} alt={item.name} />
            <Name>{item.name}</Name>
            <p>Target muscle: {item.targetMuscle}</p>
          </Box>
        ))}
      </GridContainer>
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
const Gif = styled.img`
  width: 100%;
  border-radius: 50px;
  border: 1px solid black;
  margin-bottom: 15px;
  background-color: white;
`
const Name = styled.h3`
  text-transform: uppercase;
  margin-bottom: 30px;
`
const Reps = styled.div`
  display: flex;
  column-gap: 10px;
`

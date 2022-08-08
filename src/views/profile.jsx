import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import PlanForm from '../components/PlanForm'
import Box from '../components/helpers/Box'
import usePlans from '../hooks/usePlans'

const Profile = () => {
  const [showModal, setShowModal] = useState(false)
  const { plansData, addPlan, fetchPlans } = usePlans()

  const handleNewPlan = async data => {
    console.log('New plan info: ', data)
    try {
      await addPlan(data)
      console.log('New Plan created!')
      setShowModal(false)
      await fetchPlans()
    } catch (error) {
      console.log('Error creating new plan: ', error)
    }
  }

  useEffect(() => {
    fetchPlans()
  }, [])

  return (
    <Wrapper>
      <h1>My Workout Plans</h1>
      <Button onClick={() => setShowModal(true)}>Add new Plan</Button>
      {showModal &&
        createPortal(
          <PlanForm onClose={() => setShowModal(false)} info={plansData} onCreate={handleNewPlan} />,
          document.getElementById('modals')
        )}
      <PlansContainer>
        {plansData.userPlans?.map(plan => (
          <Box key={plan._id}>
            <h2>{plan.name?.toUpperCase()}</h2>
            <Info>
              <span>Type: {plan.type}</span>
              <span>Day: {plan.day}</span>
            </Info>
            <ExerList>
              {plan.exercises.map(ex => (
                <li key={ex._id}>{ex.name}</li>
              ))}
            </ExerList>
            <Button>Edit Plan</Button>
          </Box>
        ))}
      </PlansContainer>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 30px;
  }
`
const Button = styled.button`
  padding: 3px 5px;
  border-radius: 7px;
`
const PlansContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 0 5% 100px;
  margin-top: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  align-items: stretch;
  row-gap: 30px;
`
const Info = styled.div`
  display: flex;
  column-gap: 10px;
`
const ExerList = styled.div`
  list-style: none;
  li {
    width: 100%;
    padding: 3px 50px;
    border: 1px solid black;
    border-radius: 99px;
    background-color: #d9cdbf;
    margin-bottom: 15px;
  }
`

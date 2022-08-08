import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import CreatePlan from '../components/CreatePlan'
import Box from '../components/helpers/Box'
import usePlans from '../hooks/usePlans'

const Profile = () => {
  const [showModal, setShowModal] = useState(false)
  const { plansData, fetchPlans } = usePlans()

  const handleClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    fetchPlans()
  }, [])

  return (
    <Wrapper>
      <h1>My Workout Plans</h1>
      <Buttons>
        <New onClick={() => setShowModal(true)}>Add new Plan</New>
      </Buttons>
      {showModal && createPortal(<CreatePlan onClose={handleClose} />, document.getElementById('modals'))}
      <PlansContainer>
        {plansData.userPlans?.map(plan => (
          <Box key={plan._id}>
            <h2>{plan.name.toUpperCase()}</h2>
            <Info>
              <span>Type: {plan.type.replace(/([A-Z])/g, char => ` ${char.toLowerCase()}`)}</span>
              <span>Day: {plan.day}</span>
            </Info>
            <ExerList>
              {plan.exercises.map(ex => (
                <li key={ex._id}>{ex.name}</li>
              ))}
            </ExerList>
          </Box>
        ))}
      </PlansContainer>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Buttons = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const New = styled.button`
  padding: 3px 5px;
  border-radius: 7px;
`
const PlansContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 0 5%;
  grid-template-columns: repeat(auto-fit, minmax(200, 1fr));
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
  }
`

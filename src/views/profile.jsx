import { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import CreatePlan from '../components/CreatePlan'
import usePlans from '../hooks/usePlans'

const Profile = () => {
  const [showModal, setShowModal] = useState(false)
  const token = localStorage.getItem('authToken')
  const { plansData } = usePlans(token)

  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <Wrapper>
      <h1>My Workout Plans</h1>
      <New onClick={() => setShowModal(true)}>Add new Plan</New>
      {showModal && createPortal(<CreatePlan onClose={handleClose} />, document.getElementById('modals'))}
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
const New = styled.p`
  margin-top: 50px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

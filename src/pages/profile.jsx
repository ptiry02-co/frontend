import React, { useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import PlanForm from '../components/PlanForm'
import Box from '../components/helpers/Box'
import usePlans from '../hooks/usePlans'
import { ModalContext } from '../context/modal.context'
import { Link } from 'react-router-dom'
import GridContainer from '../components/helpers/GridContainer'
import ReactLoading from 'react-loading'

const Profile = () => {
  const { setModal } = useContext(ModalContext)
  const { plansData, fetchPlans, addPlan, editPlan, deletePlan, isLoading } = usePlans()

  const handleSubmit = async data => {
    try {
      data.isNew ? await addPlan(data) : await editPlan(data)
      setModal({ isVisible: false, component: null })
      await fetchPlans()
    } catch (error) {
      console.log('Something went wrong... ', error)
    }
  }

  const handleDelete = async data => {
    try {
      await deletePlan(data)
      setModal({ isVisible: false, component: null })
      await fetchPlans()
    } catch (error) {
      console.log('Something went wrong... ', error)
    }
  }

  useEffect(() => {
    fetchPlans()
  }, [])

  return (
    <Wrapper>
      <h1>My Workout Plans</h1>
      <Button
        onClick={() =>
          setModal({
            isVisible: true,
            component: createPortal(
              <PlanForm onClose={setModal} info={plansData.enums} onSubmit={handleSubmit} />,
              document.getElementById('modals')
            )
          })
        }
      >
        Add new Plan
      </Button>
      {isLoading ? (
        <Loading type='spin' color='#6e2504' height='5%' width='5%' />
      ) : (
        <GridContainer>
          {plansData.userPlans?.map(plan => (
            <Box key={plan._id}>
              <Contents>
                <CustomLink to={`/plans/${plan._id}`}>
                  <h2>{plan.name?.toUpperCase()}</h2>
                </CustomLink>
                <Info>
                  <span>Type: {plan.type}</span>
                  <span>Day: {plan.day}</span>
                </Info>
                <ExerList>
                  {plan.exercises.map((ex, i) => (
                    <CustomLink isexercise={`${true}`} key={ex._id} to={`/profile/${plan._id}/exercises/${i}`}>
                      <li>{ex.name}</li>
                    </CustomLink>
                  ))}
                  <CustomLink to={`/profile/${plan._id}/exercises`}>add exercise</CustomLink>
                </ExerList>
              </Contents>
              <Button
                onClick={() => {
                  setModal({
                    isVisible: true,
                    component: createPortal(
                      <PlanForm
                        onClose={setModal}
                        info={plansData.enums}
                        onSubmit={handleSubmit}
                        onDelete={handleDelete}
                        editData={{
                          planId: plan._id,
                          plan: { name: plan.name, type: plan.type, day: plan.day, description: plan.description }
                        }}
                      />,
                      document.getElementById('modals')
                    )
                  })
                }}
              >
                Edit Plan
              </Button>
            </Box>
          ))}
        </GridContainer>
      )}
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
    text-align: center;
    margin: 0 5% 30px;
  }
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
const CustomLink = styled(Link).attrs(({ isexercise }) => ({ isexercise }))`
  text-decoration: ${({ isexercise }) => (isexercise ? 'none' : 'underline')};
  color: black;
  :hover {
    ${({ isexercise }) => (isexercise ? 'li {background-color: #6e2504; color: white;}' : 'color: #6e2504;')}
  }
`
const Button = styled.button`
  padding: 3px 5px;
  border-radius: 7px;
  :hover {
    cursor: pointer;
  }
`
const Info = styled.div`
  display: flex;
  column-gap: 10px;
  align-self: center;
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
const Loading = styled(ReactLoading)`
  margin-top: 3em;
`

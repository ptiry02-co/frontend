import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ExerciseForm from '../components/ExerciseForm'
import Box from '../components/helpers/Box'
import GridContainer from '../components/helpers/GridContainer'
import Pagination from '../components/helpers/Pagination'
import { ModalContext } from '../context/modal.context'
import useExercises from '../hooks/useExercises'
import usePlans from '../hooks/usePlans'

const ExersList = () => {
  const [page, setPage] = useState(1)
  const { planId } = useParams()
  const { plan, fetchPlan } = usePlans()
  const { list, fetchAllExercises, newExercise, filterByBodyPart } = useExercises()
  const { setModal } = useContext(ModalContext)

  useEffect(() => {
    if (planId) {
      fetchAllExercises().then(list => {
        fetchPlan({ planId }).then(res => {
          if (res.type === 'Mix') return
          filterByBodyPart(list, res.type)
        })
      })
    } else {
      fetchAllExercises()
    }
  }, [])

  return (
    <Wrapper>
      <h1>{plan?.type} Exercises</h1>
      {list && (
        <GridContainer>
          {list?.slice((page - 1) * 16, page * 16).map(item => (
            <Box key={item.id}>
              <Name>{item.name}</Name>
              <Gif src={item.gifUrl} alt={item.name} />
              <p>Target muscle: {item.target}</p>
              <AddLink
                onClick={() =>
                  setModal({
                    isVisible: true,
                    component: createPortal(
                      <ExerciseForm onClose={setModal} item={item} onSubmit={newExercise} planId={planId} />,
                      document.getElementById('modals')
                    )
                  })
                }
              >
                Add Exercise
              </AddLink>
            </Box>
          ))}
        </GridContainer>
      )}
      {list && <Pagination total={list?.length} selectedPage={page} onChangePage={setPage} />}
    </Wrapper>
  )
}

export default ExersList

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
const Gif = styled.img`
  width: 60%;
  border-radius: 50px;
  border: 1px solid black;
  margin-bottom: 15px;
  background-color: white;
`
const Name = styled.h3`
  text-transform: uppercase;
  margin-bottom: 30px;
`
const AddLink = styled.p`
  text-decoration: underline;
  cursor: pointer;
  :active {
    color: #d9cdbf;
  }
`

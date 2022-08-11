import { useContext } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { ModalContext } from '../context/modal.context'
import ExerciseForm from './ExerciseForm'
import Box from './helpers/Box'
import GridContainer from './helpers/GridContainer'

const DisplayExercises = ({ list, page, onSubmit, planId }) => {
  const { setModal } = useContext(ModalContext)
  return (
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
                  <ExerciseForm onClose={setModal} item={item} onSubmit={onSubmit} planId={planId} />,
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
  )
}

export default DisplayExercises

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

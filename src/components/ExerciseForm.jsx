import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Backdrop from './helpers/Backdrop'
import Box from './helpers/Box'
import TextInput from './helpers/TextInput'

const ExerciseForm = ({ onClose, item, onSubmit, planId }) => {
  const navigate = useNavigate()
  const sets = useRef(),
    reps = useRef()

  const handleSubmit = async e => {
    const data = {
      planId,
      exercise: {
        gif: item.gifUrl,
        name: item.name,
        targetMuscle: item.target,
        sets: sets.current.value,
        reps: reps.current.value
      }
    }
    try {
      await onSubmit(data)
      onClose({ isVisible: false, component: null })
      if (e.target.innerText === 'Add and finish') {
        navigate(`/plans/${planId}`)
      }
    } catch (error) {
      console.log('Something went wrong... ', error)
    }
  }

  return (
    <>
      <Backdrop onClose={onClose} />
      <Box isModal>
        <h2>{item.name.toUpperCase()}</h2>
        <Gif src={item.gifUrl} alt={item.name} />
        <p>Target muscle: {item.target}</p>
        <label>
          Num. of sets: <TextInput ref={sets} type='number' min={0} />
        </label>
        <label>
          Num. of reps: <TextInput ref={reps} type='number' min={0} />
        </label>
        <Button onClick={e => handleSubmit(e)}>Add and continue</Button>
        <Button onClick={e => handleSubmit(e)}>Add and finish</Button>
      </Box>
    </>
  )
}

export default ExerciseForm

const Gif = styled.img`
  width: 60%;
  border-radius: 50px;
  border: 1px solid black;
  margin-bottom: 15px;
  background-color: white;
`
const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  :hover {
    cursor: pointer;
  }
`

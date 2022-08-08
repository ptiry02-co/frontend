import { useRef } from 'react'
import usePlans from '../hooks/usePlans'
import Backdrop from './helpers/Backdrop'
import Box from './helpers/Box'
import TextInput from './helpers/TextInput'

const CreatePlan = ({ onClose }) => {
  const { plansData, addPlan } = usePlans()
  const name = useRef()
  return (
    <>
      <Backdrop />
      <Box isModal>
        <h2>Create new plan</h2>
        <label>Name</label>
        <TextInput ref={name} type='text' />
        <button onClick={onClose}>Close</button>
      </Box>
    </>
  )
}

export default CreatePlan

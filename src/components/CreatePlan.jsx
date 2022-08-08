import { useRef, useState } from 'react'
import styled from 'styled-components'
import Backdrop from './helpers/Backdrop'
import Box from './helpers/Box'
import TextInput from './helpers/TextInput'

const CreatePlan = ({ onClose, info, onCreate }) => {
  const [formData, setFormData] = useState({
    type: '',
    day: '',
  })
  const name = useRef(),
    descr = useRef()
  return (
    <>
      <Backdrop onClose={onClose} />
      <Box isModal>
        <h2>Create new plan</h2>
        <label>Name</label>
        <TextInput type='text' ref={name} />
        <label>Day</label>
        <Options value={formData.day} onChange={e => setFormData({ ...formData, day: e.target.value })}>
          {info.days?.map((day, i) => (
            <option key={i} value={day}>
              {day}
            </option>
          ))}
        </Options>
        <label>Body part</label>
        <Options value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}>
          {info.planTypes?.map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </Options>
        <label>Description</label>
        <Description ref={descr} cols='20' rows='3'></Description>
        <Button onClick={() => onCreate({ ...formData, name: name.current.value, description: descr.current.value })}>
          Create Plan
        </Button>
      </Box>
    </>
  )
}

export default CreatePlan

const Options = styled.select`
  padding: 0.5rem 0.8rem;
  width: 70%;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 15px;
`
const Description = styled.textarea`
  resize: none;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid black;
  border-radius: 10px;
`
const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`

import { useRef, useState } from 'react'
import styled from 'styled-components'
import Backdrop from './helpers/Backdrop'
import Box from './helpers/Box'
import TextInput from './helpers/TextInput'

const PlanForm = ({ onClose, info, onCreate }) => {
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
          <option value='default'>-- Select a day --</option>
          {info.days?.map((day, i) => (
            <option key={i} value={day}>
              {day}
            </option>
          ))}
        </Options>
        <label>Body section</label>
        <Options value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}>
          <option value='default'>-- Select a body section --</option>
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

export default PlanForm

const Options = styled.select`
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 15px;
  text-align: center;
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

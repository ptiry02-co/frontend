import { useRef } from 'react'
import styled from 'styled-components'
import Backdrop from './helpers/Backdrop'
import Box from './helpers/Box'
import TextInput from './helpers/TextInput'

const PlanForm = ({ onClose, info, onSubmit, editData = undefined, onDelete }) => {
  const name = useRef(),
    descr = useRef(),
    daySelect = useRef(),
    typeSelect = useRef()

  const handleInfo = () => {
    const data = {
      plan: {
        name: name.current.value,
        type: typeSelect.current.value,
        description: descr.current.value,
        day: daySelect.current.value,
      },
      isNew: editData ? false : true,
      planId: editData?.planId,
    }
    onSubmit(data)
  }

  return (
    <>
      <Backdrop onClose={onClose} />
      <Box isModal>
        <h2>Create new plan</h2>
        <label>Name</label>
        <TextInput ref={name} value={editData?.plan?.name || name.current?.value} />
        <label>Day</label>
        <Options
          ref={daySelect}
          value={editData?.plan?.day || daySelect.current?.value}
          onChange={e => ({ ...daySelect.current, value: e.target.value })}
        >
          <option value='default'>-- Select a day --</option>
          {info.days?.map((day, i) => (
            <option key={i} value={day}>
              {day}
            </option>
          ))}
        </Options>
        <label>Body section</label>
        <Options
          ref={typeSelect}
          value={editData?.plan?.type || typeSelect.current?.value}
          onChange={e => ({ ...typeSelect.current, value: e.target.value })}
        >
          <option value='default'>-- Select a body section --</option>
          {info.planTypes?.map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </Options>
        <label>Description</label>
        <Description ref={descr} cols='20' rows='3' defaultValue={editData?.plan?.description || ''}></Description>
        {editData ? (
          <Buttons>
            <Button onClick={handleInfo}>Accept</Button>
            <Button onClick={() => onDelete({ planId: editData.planId })}>Delete</Button>
          </Buttons>
        ) : (
          <Button onClick={handleInfo}>Create Plan</Button>
        )}
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
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;
  button:last-child {
    background-color: #a20000;
    color: white;
    border-color: lightgray;
  }
`

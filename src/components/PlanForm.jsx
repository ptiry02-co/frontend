import { useRef } from 'react'
import styled from 'styled-components'
import Backdrop from './helpers/Backdrop'
import Box from './helpers/Box'
import TextInput from './helpers/TextInput'

const PlanForm = ({ onClose, info, onSubmit, editData = undefined }) => {
  const name = useRef(),
    descr = useRef(),
    daySelect = useRef(),
    typeSelect = useRef()

  const handleInfo = () => {
    const data = {
      info: {
        name: name.current.value,
        type: typeSelect.current.value,
        description: descr.current.value,
        day: daySelect.current.value,
      },
      isNew: editData ? false : true,
    }
    onSubmit(data)
  }

  return (
    <>
      <Backdrop onClose={onClose} />
      <Box isModal>
        <h2>Create new plan</h2>
        <label>Name</label>
        <TextInput ref={name} value={editData?.name || name.current?.value} />
        <label>Day</label>
        <Options
          ref={daySelect}
          value={editData?.day || daySelect.current?.value}
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
          value={editData?.type || typeSelect.current?.value}
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
        <Description ref={descr} cols='20' rows='3' defaultValue={editData?.description || ''}></Description>
        <Button onClick={handleInfo}>{editData ? 'Edit Plan' : 'Create Plan'}</Button>
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

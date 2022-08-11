import { forwardRef } from 'react'
import styled from 'styled-components'

const TextInput = forwardRef(({ type = 'text', value = undefined, min = undefined }, ref) => (
  <Input
    required
    ref={ref}
    type={type}
    min={min}
    value={value}
    onChange={e => ({ ...ref.current, value: e.target.value })}
  />
))

// 👇 This is to display the name of the component in the React dev tools.
TextInput.displayName = 'TextInput'

export default TextInput

const Input = styled.input`
  align-self: center;
  margin-bottom: 10px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid black;
`

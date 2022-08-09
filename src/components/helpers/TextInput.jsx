import { forwardRef } from 'react'
import styled from 'styled-components'

const TextInput = forwardRef(({ type = 'text', value = undefined }, ref) => (
  <Input ref={ref} type={type} value={value} onChange={e => ({ ...ref.current, value: e.target.value })} />
))

export default TextInput

const Input = styled.input`
  align-self: center;
  margin-bottom: 10px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid black;
`

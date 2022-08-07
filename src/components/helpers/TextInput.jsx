import { forwardRef } from 'react'
import styled from 'styled-components'

const TextInput = forwardRef(({ type = 'text' }, ref) => <Input ref={ref} type={type} />)

export default TextInput

const Input = styled.input`
  align-self: center;
  margin-bottom: 10px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`

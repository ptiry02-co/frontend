import { useRef } from 'react'
import styled from 'styled-components'
import Box from '../components/Box'

const SignUp = () => {
  const email = useRef(),
    pass = useRef()

  const handleClick = () => {
    const data = { email: email.current.value, password: pass.current.value }
  }
  return (
    <Box>
      <Title>Sign Up</Title>
      <Label>Email</Label>
      <Input ref={email} type='email' />
      <Label>Password</Label>
      <Input ref={pass} type='password' />
      <Button>Sign up</Button>
    </Box>
  )
}

export default SignUp

const Title = styled.h2`
  align-self: center;
  margin-bottom: 30px;
`
const Label = styled.label`
  align-self: center;
`
const Input = styled.input`
  align-self: center;
  margin-bottom: 10px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`
const Button = styled.button`
  align-self: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`

import { useContext, useRef } from 'react'
import styled from 'styled-components'
import Box from './helpers/Box'
import { UserContext } from '../context/auth.context'
import useAuth from '../hooks/useAuth'
import TextInput from './helpers/TextInput'
import { Link } from 'react-router-dom'
import Backdrop from './helpers/Backdrop'
import { AuthModalContext } from '../context/modal.context'

const AuthForm = ({ isNew = false }) => {
  const { authUser } = useAuth(isNew)
  const { setUser } = useContext(UserContext),
    { authModal, setAuthModal } = useContext(AuthModalContext)
  const email = useRef(),
    pass = useRef()

  const handleAuth = async () => {
    const data = { email: email.current.value, password: pass.current.value }
    try {
      const user = await authUser(data)
      setUser(user)
      setAuthModal({ ...authModal, isVisible: false })
    } catch (error) {
      console.log('Something went wrong...', error)
    }
  }
  return (
    <>
      <Backdrop />
      <Box isModal>
        <Title>{isNew ? 'Sign Up' : 'Log In'}</Title>
        <label>Email</label>
        <TextInput ref={email} type='email' />
        <label>Password</label>
        <TextInput ref={pass} type='password' />
        {isNew ? (
          <p>
            Already have an account? Log in <Link to='/login'>here</Link>
          </p>
        ) : (
          <p>
            Don't have an account? Sign up <Link to='/signup'>here</Link>
          </p>
        )}
        <Button onClick={handleAuth}>{isNew ? 'Sign Up' : 'Log In'}</Button>
      </Box>
    </>
  )
}

export default AuthForm

const Title = styled.h2`
  margin-bottom: 30px;
`
const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`

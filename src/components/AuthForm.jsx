import { useContext, useRef } from 'react'
import styled from 'styled-components'
import Box from './helpers/Box'
import { UserContext } from '../context/auth.context'
import useAuth from '../hooks/useAuth'
import TextInput from './helpers/TextInput'
import Backdrop from './helpers/Backdrop'
import { ModalContext } from '../context/modal.context'
import { useNavigate } from 'react-router-dom'

const AuthForm = ({ isNew = false, onClose }) => {
  const navigate = useNavigate()
  const { authUser } = useAuth(isNew)
  const { setUser } = useContext(UserContext)
  const { modal, setModal } = useContext(ModalContext)
  const email = useRef(),
    pass = useRef()

  const handleAuth = async () => {
    const data = { email: email.current.value, password: pass.current.value }
    try {
      const user = await authUser(data)
      setUser(user)
      onClose({ isVisible: false, component: null })
      navigate('/profile')
    } catch (error) {
      console.log('Something went wrong...', error)
    }
  }
  return (
    <>
      <Backdrop onClose={onClose} />
      <Box isModal>
        <Title>{isNew ? 'Sign Up' : 'Log In'}</Title>
        <label>Email</label>
        <TextInput ref={email} type='email' />
        <label>Password</label>
        <TextInput ref={pass} type='password' />
        {isNew ? (
          <p>
            Already have an account? Log in{' '}
            <ModalLink onClick={() => setModal({ ...modal, component: <AuthForm onClose={setModal} /> })}>
              here
            </ModalLink>
          </p>
        ) : (
          <p>
            Don&apos;t have an account? Sign up{' '}
            <ModalLink onClick={() => setModal({ ...modal, component: <AuthForm isNew onClose={setModal} /> })}>
              here
            </ModalLink>
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
const ModalLink = styled.span`
  text-decoration: underline;
  color: blue;
  :hover {
    cursor: pointer;
  }
  :active {
    color: darkviolet;
  }
`

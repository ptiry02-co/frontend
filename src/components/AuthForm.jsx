import { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import Box from './helpers/Box'
import { UserContext } from '../context/auth.context'
import useAuth from '../hooks/useAuth'
import TextInput from './helpers/TextInput'
import Backdrop from './helpers/Backdrop'
import { ModalContext } from '../context/modal.context'
import { useNavigate } from 'react-router-dom'
import ReactLoading from 'react-loading'

const AuthForm = ({ isNew = false, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const navigate = useNavigate()
  const { authUser } = useAuth(isNew)
  const { setUser } = useContext(UserContext)
  const { modal, setModal } = useContext(ModalContext)
  const username = useRef(),
    pass = useRef()

  const handleAuth = async () => {
    setIsLoading(true)
    const data = { username: username.current.value, password: pass.current.value }
    if (!username.current.value || !pass.current.value) {
      setIsLoading(false)
      setError({ message: 'Please enter valid credentials.' })
      return
    }
    try {
      const user = await authUser(data)
      setUser(user)
      setIsLoading(false)
      onClose({ isVisible: false, component: null })
      navigate('/profile')
    } catch (error) {
      setIsLoading(false)
      console.log('Something went wrong...', error)
      setError(error)
    }
  }
  return (
    <>
      <Backdrop onClose={onClose} />
      <Box isModal>
        {isLoading ? (
          <Loading type='spin' color='#6e2504' height='30%' width='30%' />
        ) : (
          <>
            <Title>{isNew ? 'Sign Up' : 'Log In'}</Title>
            {error && <Error>{error.message}</Error>}
            <label>Username</label>
            <TextInput ref={username} type='text' />
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
          </>
        )}
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
  :hover {
    cursor: pointer;
  }
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
const Error = styled.p`
  color: red;
`
const Loading = styled(ReactLoading)`
  margin: 20% 0;
`

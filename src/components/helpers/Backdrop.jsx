import { useContext } from 'react'
import styled from 'styled-components'
import { AuthModalContext } from '../../context/modal.context'

const Backdrop = () => {
  const { authModal, setAuthModal } = useContext(AuthModalContext)
  return <Background onClick={() => setAuthModal({ ...authModal, isVisible: false })}></Background>
}

export default Backdrop

const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`

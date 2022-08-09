import { createPortal } from 'react-dom'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './views/home'
import GlobalStyles from './styles/globalStyles'
import AuthForm from './components/AuthForm'
import { useContext } from 'react'
import { ModalContext } from './context/modal.context'
import Navbar from './components/Navbar'
import { UserContext } from './context/auth.context'
import Profile from './views/profile'

function App() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext),
    { modal, setModal } = useContext(ModalContext)

  /* const handleModal = isNew => {
    setModal({ isNew, isVisible: true })
  } */

  const logOut = () => {
    localStorage.removeItem('authToken')
    setUser(null)
    navigate('/')
  }

  return (
    <>
      <GlobalStyles />
      {modal.isVisible && modal.component}
      <Navbar user={user} handleModal={setModal} logOut={logOut} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App

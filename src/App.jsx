import { createPortal } from 'react-dom'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './views/home'
import GlobalStyles from './styles/globalStyles'
import AuthForm from './components/AuthForm'
import { useContext } from 'react'
import { AuthModalContext } from './context/modal.context'
import Navbar from './components/Navbar'
import { UserContext } from './context/auth.context'

function App() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext),
    { authModal, setAuthModal } = useContext(AuthModalContext)

  const handleModal = isNew => {
    setAuthModal({ isNew, isVisible: true })
  }

  const logOut = () => {
    localStorage.removeItem('authToken')
    setUser(null)
    navigate('/')
  }

  return (
    <>
      <GlobalStyles />
      {authModal.isVisible && createPortal(<AuthForm isNew={authModal.isNew} />, document.getElementById('modals'))}
      <Navbar user={user} handleModal={handleModal} logOut={logOut} />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App

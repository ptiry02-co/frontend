import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './views/home'
import GlobalStyles from './styles/globalStyles'
import { useContext } from 'react'
import { ModalContext } from './context/modal.context'
import Navbar from './components/Navbar'
import { UserContext } from './context/auth.context'
import Profile from './views/profile'
import PlanDetails from './components/PlanDetails'

function App() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext),
    { modal, setModal } = useContext(ModalContext)

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
        <Route path='/plans/:planId' element={<PlanDetails />} />
      </Routes>
    </>
  )
}

export default App

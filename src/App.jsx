import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/home'
import GlobalStyles from './styles/globalStyles'
import { useContext } from 'react'
import { ModalContext } from './context/modal.context'
import Navbar from './components/Navbar'
import { UserContext } from './context/auth.context'
import Profile from './pages/profile'
import PlanDetails from './pages/plan-details'
import ExersList from './pages/exercises'
import ExerciseDetails from './pages/exercise-details'

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
        <Route path='/exercises' element={<ExersList />} />
        <Route path='/plans/:planId' element={<PlanDetails />} />
        <Route path='/profile/:planId/exercises' element={<ExersList />} />
        <Route path='/profile/:planId/exercises/:exerciseIndex' element={<ExerciseDetails />} />
      </Routes>
    </>
  )
}

export default App

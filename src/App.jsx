import { Route, Routes } from 'react-router-dom'
import HomePage from './views/home'
import GlobalStyles from './styles/globalStyles'
import SignUp from './views/sign-up'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App

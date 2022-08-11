import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const { checkUser } = useAuth()

  const verification = user => {
    if (!user) {
      setUser(null)
      navigate('/')
      return
    }
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token || window.location.pathname.split('/')[1] !== 'exercises') {
      checkUser().then(user => {
        verification(user)
      })
    }
  }, [])

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export default UserProvider

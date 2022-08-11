import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const { checkUser } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    checkUser().then(user => {
      if (!token || !user) {
        setUser(null)
        navigate('/')
        return
      }
      setUser(user)
    })
  }, [])

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export default UserProvider

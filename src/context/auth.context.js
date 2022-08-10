import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  // eslint-disable-next-line prefer-const
  let [user, setUser] = useState()
  const { checkUser } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) return
    checkUser().then(user => {
      if (!user) {
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

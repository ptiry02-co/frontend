import { createContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const { checkUser } = useAuth()

  useEffect(() => {
    checkUser().then(user => {
      if (!user) return setUser(null)
      setUser(user)
    })
  }, [])

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export default UserProvider

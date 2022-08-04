import { createContext, useEffect, useState } from 'react'
import { getVerifyUser } from '../api/user'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const checkUser = async () => {
    const userToken = localStorage.getItem('authToken')

    if (!userToken) return

    try {
      const res = await getVerifyUser()

      // need endpoint to fetch user by id
    } catch (error) {
      console.log('Error verifying user: ', error)
    }
  }

  useEffect(() => {}, [])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthProvider

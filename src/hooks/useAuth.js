import { useState } from 'react'
import { createUser, postUser, verifyUser } from '../api/user'

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false)

  const signUp = async user => {
    try {
      setIsLoading(true)

      const { data } = await createUser(user)

      localStorage.setItem('authToken', data.authToken)

      setIsLoading(false)
      return data.user
    } catch (error) {
      console.log('Error in sign up: ', error)
    }
  }

  const logIn = async user => {
    try {
      setIsLoading(true)

      const { data } = await postUser(user)

      localStorage.setItem('authToken', data.authToken)

      setIsLoading(false)
      return data.user
    } catch (error) {
      console.log('Error in Log in: ', error)
    }
  }

  const checkUser = async () => {
    const storedToken = localStorage.getItem('authToken')

    if (!storedToken) return

    try {
      setIsLoading(true)

      const { data } = await verifyUser(storedToken)

      setIsLoading(false)
      return data
    } catch (error) {
      console.log('Error getting logged user: ', error)
    }
  }

  return { isLoading, signUp, logIn, checkUser }
}
export default useAuth

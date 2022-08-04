import { useState } from 'react'
import { postSignUp } from '../api/user'

const useAuth = () => {
  const [authData, setAuthData] = useState({ isLoading: false, isLoggedIn: false, user: null })

  const signUp = async user => {
    try {
      setAuthData({ ...authData, isLoading: true })

      const res = await postSignUp(user)

      localStorage.setItem('authToken', res.authToken)

      setAuthData({ isLoading: false, isLoggedIn: true, user: res.payload })
    } catch (error) {
      console.log('Error in sign up: ', error)
    }
  }

  return { authData, signUp }
}
export default useAuth

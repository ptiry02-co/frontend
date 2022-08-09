import { createUser, postUser, verifyUser } from '../api/user'

const useAuth = isNew => {
  const authUser = async user => {
    try {
      const { data } = isNew ? await createUser(user) : await postUser(user)

      localStorage.setItem('authToken', data.authToken)
      return data.user
    } catch (error) {
      console.log('Error while authenticating: ', error)
    }
  }

  const checkUser = async () => {
    const storedToken = localStorage.getItem('authToken')

    if (!storedToken) return

    try {
      const { data } = await verifyUser(storedToken)

      return data
    } catch (error) {
      console.log('Error getting logged user: ', error)
    }
  }

  return { authUser, checkUser }
}
export default useAuth

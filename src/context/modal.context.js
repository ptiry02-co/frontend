import { createContext, useEffect, useState } from 'react'

export const AuthModalContext = createContext()

const AuthModalProvider = ({ children }) => {
  const [authModal, setAuthModal] = useState({
    isVisible: false,
    isNew: false,
  })

  useEffect(() => {
    if (authModal.isVisible) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  }, [authModal.isVisible])

  return <AuthModalContext.Provider value={{ authModal, setAuthModal }}>{children}</AuthModalContext.Provider>
}

export default AuthModalProvider

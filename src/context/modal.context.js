import { createContext, useEffect, useState } from 'react'

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isVisible: false,
    component: null
  })

  useEffect(() => {
    if (modal.isVisible) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  }, [modal.isVisible])

  return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>
}

export default ModalProvider

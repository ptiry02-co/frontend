import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import UserProvider from './context/auth.context'
import ModalProvider from './context/modal.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ModalProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ModalProvider>
  </BrowserRouter>
)

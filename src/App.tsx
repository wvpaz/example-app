import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './routes'
import { UserProvider } from './contexts/User/User.provider'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App

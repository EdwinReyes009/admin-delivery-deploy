import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Auth from './pages/Auth'

let isLogged = true

function App() {
  return (
    <>
      {isLogged ? (
        // Logged
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/auth/*' element={<Auth />} />
            <Route path='/home/*' element={<Home />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/*' element={<Navigate to='/not-found' />} />
          </Routes>
        </BrowserRouter>
      ) : (
        // NotLogged
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/auth' />} />
            <Route path='/auth/*' element={<Auth />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/*' element={<Navigate to='/not-found' />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App

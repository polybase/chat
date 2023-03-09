import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Chat } from './pages/Chat'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chats/:username' element={<Chat />} />
      <Route path='/chats/:username/:id' element={<Chat />} />
    </Routes>
  )
}
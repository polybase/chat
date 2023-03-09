import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/react'
import { Home } from './pages/Home'
import { Chat } from './pages/Chat'

export function AppRoutes() {
  const mode = useColorMode()
  useEffect(() => {
    mode.setColorMode('light')
  }, [mode])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chats/:username' element={<Chat />} />
      <Route path='/chats/:username/:id' element={<Chat />} />
    </Routes>
  )
}
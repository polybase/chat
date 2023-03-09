import * as React from 'react'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/world' element={<>} /> */}
      </Routes>

    </BrowserRouter>
  </ChakraProvider>
)

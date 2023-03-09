import * as React from 'react'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<div>Hello</div>} />
        <Route path='/world' element={<div>World</div>} />
      </Routes>

    </BrowserRouter>
  </ChakraProvider>
)

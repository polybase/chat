import * as React from 'react'
import {
  ChakraProvider,
  ColorModeScript,
  theme,
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode='light' />
    <BrowserRouter>

      <AppRoutes />

    </BrowserRouter>
  </ChakraProvider>
)

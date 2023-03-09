import * as React from 'react'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Polybase } from '@polybase/client'
import { PolybaseProvider } from '@polybase/react'
import { AppRoutes } from './AppRoutes'

const db = new Polybase({
  defaultNamespace: 'pk/0x4cecf533e63531517a8bb76e03e6966cd4b3c208919e0acc1558873a34773b4c5ea19e35397806824c00d0cad7ad315e11a3a51ab2d1b1ea2bf467fa3b1ca35a/Chat',
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <PolybaseProvider polybase={db}>
      <BrowserRouter>

        <AppRoutes />

      </BrowserRouter>
    </PolybaseProvider>
  </ChakraProvider>
)

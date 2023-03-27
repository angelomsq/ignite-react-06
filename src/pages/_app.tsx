import Header from '@/components/Header'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

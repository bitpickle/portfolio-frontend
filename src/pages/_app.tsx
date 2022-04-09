import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/organisms/Nav'
import { Chakra } from '../styles/Chakra'
import Footer from '../components/organisms/Footer'
import { Box, Container } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Nav></Nav>
      <Box overflowX={'hidden'}>
        <Component {...pageProps} />
      </Box>
      <Footer></Footer>
    </Chakra>
  )
}

export default MyApp

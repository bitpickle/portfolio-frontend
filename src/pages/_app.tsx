import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import { Chakra } from '../styles/Chakra'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Nav></Nav>
      <Component {...pageProps} />
      <Footer></Footer>
    </Chakra>
  )
}

export default MyApp

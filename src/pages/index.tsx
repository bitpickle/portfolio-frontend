import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Testimonials from '../components/Testimonials'

const Home: NextPage = () => {
  return (
    <>
    <Hero></Hero>
    <Statistics></Statistics>
    <Testimonials></Testimonials>
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import Hero from '../components/organisms/Hero'
import MyTweets from '../components/organisms/MyTweets'
import Statistics from '../components/organisms/Statistics'

const Home: NextPage = () => {
  return (
    <>
    <Hero></Hero>
    <Statistics></Statistics>
    <MyTweets></MyTweets>
    </>
  )
}

export default Home

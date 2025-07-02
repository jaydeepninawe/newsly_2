import React from 'react'
import MainNewsSection from '../components/Mainsection'
// import Recommended from '../components/SecondSection'
import EntertainmentSection from '../components/secondsection'
import ScrollingNewsStrip from '../components/infiniteCards'
import VerticalNewsList from '../components/vertical'
import ThreeColumnNewsGrid from '../components/LastGrid'

const Home = () => {
  return (
    <div>
      <MainNewsSection/>
      {/* <Recommended/> */}
      <EntertainmentSection/>
      {/* Add more sections as needed */}
      <ScrollingNewsStrip/>
      {/* Add more sections as needed */}
      <VerticalNewsList/>
      {/* Add more sections as needed */}
      <ThreeColumnNewsGrid/>
    </div>
  )
}

export default Home

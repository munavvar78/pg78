import React from 'react'
import Block1 from '../components/Block1'
import HomeContent from '../components/HomeContent'
import LifeAtPg from '../components/LifeAtPg'
import NoAuthHeader from '../components/NoAuthHeader'
import SlideShow from '../components/SlideShow'
import Footer from '../components/Footer'
const NotAuthHome = () => {
  return (
    <div>
      <NoAuthHeader />   
    <HomeContent/>
    <Block1/>
    <LifeAtPg/>
    <SlideShow/>
    <Footer/>
      </div>
  )
}

export default NotAuthHome
import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import About from './About'
import Services from './Services'
import Services2 from './Services2'
import Contact from './Contact'
import Footer from '../components/Footer'
import Reviews from './Reviews'
import Careers from './Careers'
import Media from './Media'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Services/>
      <About/>
      <Services2/>
     
      <Careers/>
      <Media/>
       <Reviews/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home

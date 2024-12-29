import React from 'react'
import SearchArea from './component/SearchArea'
import Navbar from './component/Navbar'
import Testimonials from './component/Testimonials'
import Projects from './component/Projects'
import Footer from './component/Footer'

const Home = () => {
  return (
   <>
    <Navbar/>
    <SearchArea/>
    <Projects/>
    <Testimonials/>
    <Footer/>
   </>
  )
}

export default Home
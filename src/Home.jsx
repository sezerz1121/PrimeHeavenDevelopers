import React from 'react'
import SearchArea from './component/SearchArea'
import Navbar from './component/Navbar'
import Testimonials from './component/Testimonials'
import Projects from './component/Projects'
import Footer from './component/Footer'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
   <>
    <Helmet>
      <title>Prime Heaven Developers - Home</title>
      <meta name="description" content="Welcome to Prime Heaven Developers. We offer the best development services." />
      <meta name="keywords" content="development, web development, software development, Prime Heaven Developers" />
      <meta name="author" content="Prime Heaven Developers" />
    </Helmet>
    <Navbar/>
    <SearchArea/>
    <Projects/>
    <Testimonials/>
    <Footer/>
   </>
  )
}

export default Home
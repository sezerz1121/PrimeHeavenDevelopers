import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllProjects from './AllProjects';
import Contact from './Contact';
import Book from './Book';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/book' element={<Book />} />
      </Routes>
</Router>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './files/contact'
import Blog from './files/Blog'
import Home from './files/Home';
import Portfolio from './files/Portfolio';
import Resume from './files/Resume';

function App() {
  return (
    <>
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
    </Router>
    </>
  )
} 
export default App 
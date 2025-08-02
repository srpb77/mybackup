import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Testimonial from './components/Home/Testimonial'
import Team from './components/Home/Team'
import Blog from './components/Home/Blog'
import Client from './components/Home/Client'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeSlider from './components/Home/HomeSlider'
import About from './pages/About'
import Services from './pages/Services'
import BlogList from './pages/BlogList'
import Contact from './pages/Contact'
import BlogDetails from './pages/BlogDetails'
import BlogCategory from './pages/BlogCategory'
import BlogSearch from './pages/BlogSearch'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      
<Route path="/" element={<div><Home /><Testimonial /><Team /><Blog /><Client /></div>} />
<Route path="/about" element={<div><About /><Team /><Client /></div>} />
<Route path="/services" element={<div><Services /><Testimonial /></div>} />
<Route path="/blog" element={<div><BlogList /></div>} />
<Route path="/contact" element={<div><Contact /></div>} />
<Route path="/blog/:slug" element={<div><BlogDetails /><Client /></div>} />
<Route path="/blog/category/:categoryId" element={<div><BlogCategory /></div>} />
<Route path="/blog/search" element={<div><BlogSearch /></div>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
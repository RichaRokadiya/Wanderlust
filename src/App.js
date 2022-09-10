import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Recommend from './components/Recommend'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Login from './components/Login'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<div><ScrollToTop />
          <Navbar />
          <Hero />
          <Services />
          <Recommend />
          <Testimonials />
          <Footer /></div>}>
        </Route>  
      </Routes>

      {/* <Login /> */}
    </>
  );
}

import React from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Product from './components/Product'
import Marquee from './components/Marquee'
import Featured from './components/Featured'
import Popular from './components/Popular'
import Community from './components/Community'
import FaQs from './components/FaQs'
import Footer from './components/Footer'

function App() {
  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  return (
    <>
    <div className='main w-full min-h-screen bg-zinc-100'>
      <Navbar />
      <HeroSection />
      <Marquee />
      <Product />
      <Featured />
      <Popular />
      <Community />
      <FaQs />
      <Footer />
    </div>
    </>
  )
}

export default App

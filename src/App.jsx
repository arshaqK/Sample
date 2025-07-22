import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import FocusAreas from './components/FocusAreas'
import Platform from './components/Platform'
import Investments from './components/Investments'
import Security from './components/Security'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <CookieBanner />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FocusAreas />
                <Platform />
                <Investments />
                <Security />
              </>
            } />
            <Route path="/why-us" element={<div className="py-20 text-center">Why Us Page</div>} />
            <Route path="/faq" element={<div className="py-20 text-center">FAQ Page</div>} />
            <Route path="/contact" element={<div className="py-20 text-center">Contact Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
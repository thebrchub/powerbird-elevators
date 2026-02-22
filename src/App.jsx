import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './components/NotFound';
import LiftIntro from './components/LiftIntro'
import Navbar from './components/Navbar'
import FloatingContact from './components/FloatingContact'

function App() {
  // 1. GLOBAL LIFT INTRO STATE
  // We use this single state to handle the intro for the whole app session.
  const [isIntroDone, setIsIntroDone] = useState(() => {
    return sessionStorage.getItem('powerbird_intro_shown') === 'true'
  })

  const handleIntroFinish = () => {
    setIsIntroDone(true)
    sessionStorage.setItem('powerbird_intro_shown', 'true') 
  }

  return (
    <BrowserRouter>
      {/* GLOBAL LIFT INTRO
         - Rendered unconditionally.
         - Handles its own visibility check inside (LiftIntro.jsx).
         - Sits on top (z-99999).
      */}
      <LiftIntro onFinish={handleIntroFinish} />
      
      {/* Navbar always shows logo now to catch the animation */}
      <Navbar showLogo={true} />

      <MainLayout showNavbarLogo={isIntroDone}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </MainLayout>
      <FloatingContact />
    </BrowserRouter>
  )
}

export default App
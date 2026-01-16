import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Network from './pages/Projects'
import Contact from './pages/Contact'
import LiftIntro from './components/LiftIntro'

function App() {
  // 1. Theme State
  const [darkPreview, setDarkPreview] = useState(false)

  // 2. Lift Intro State
  // We check sessionStorage so it remembers if it played already.
  // If you want it to play on EVERY refresh, change this to: useState(false)
  const [isIntroDone, setIsIntroDone] = useState(() => {
    return sessionStorage.getItem('liftPlayed') === 'true'
  })

  // 3. Theme Effect
  useEffect(() => {
    if (darkPreview) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkPreview])

  // 4. Handler for when Lift finishes
  const handleIntroFinish = () => {
    setIsIntroDone(true)
    sessionStorage.setItem('liftPlayed', 'true') // Save state so it doesn't replay
  }

  return (
    <BrowserRouter>
      {/* GLOBAL LIFT INTRO
          We render this conditionally BEFORE the MainLayout.
          It is independent of routes now.
      */}
      {!isIntroDone && <LiftIntro onFinish={handleIntroFinish} />}

      {/* Pass isIntroDone to MainLayout. 
          This ensures the Navbar logo only appears AFTER the lift is done.
      */}
      <MainLayout showNavbarLogo={isIntroDone} darkPreview={darkPreview}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                // Removed onIntroComplete since App handles it now
                darkPreview={darkPreview}
                setDarkPreview={setDarkPreview}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                darkPreview={darkPreview}
                setDarkPreview={setDarkPreview}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                darkPreview={darkPreview}
                setDarkPreview={setDarkPreview}
              />
            }
          />
          <Route
            path="/network"
            element={
              <Network
                darkPreview={darkPreview}
                setDarkPreview={setDarkPreview}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                darkPreview={darkPreview}
                setDarkPreview={setDarkPreview}
              />
            }
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
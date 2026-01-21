import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react' // Removed useEffect as it was only used for dark theme

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Network from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './components/NotFound';
import LiftIntro from './components/LiftIntro'
import Navbar from './components/Navbar'

function App() {
  // Removed darkPreview state and useEffect

  // Sync state with storage for Lift Intro
  const [isIntroDone, setIsIntroDone] = useState(() => {
    return sessionStorage.getItem('powerbird_intro_shown') === 'true'
  })

  const handleIntroFinish = () => {
    setIsIntroDone(true)
    sessionStorage.setItem('powerbird_intro_shown', 'true') 
  }

  return (
    <BrowserRouter>
      {/* Lift Intro (Unconditional Render) */}
      <LiftIntro onFinish={handleIntroFinish} />
      
      {/* Navbar:
          - showLogo={true}: Ensures logo is always mounted to catch the flying animation.
          - Removed darkPreview prop (Defaults to light/cleaned in component).
      */}
      <Navbar showLogo={true} />

      <MainLayout showNavbarLogo={isIntroDone}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                // Pass isIntroDone if Home needs to delay its own animations
                isIntroDone={isIntroDone} 
                // Removed darkPreview props
              />
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
          <Route
            path="/services"
            element={
              <Services />
            }
          />
          {/* <Route
            path="/network"
            element={
              <Network />
            }
          /> */}
          <Route
            path="/contact"
            element={
              <Contact />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react' // 1. Import useEffect

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  // 2. Define the theme state here
  const [darkPreview, setDarkPreview] = useState(false)

  const [showNavbarLogo, setShowNavbarLogo] = useState(() => {
    return sessionStorage.getItem('liftPlayed') === 'true'
  })

  // 3. This Effect toggles the class on the <body> tag
  // This is what actually changes the scrollbar colors based on your CSS
  useEffect(() => {
    if (darkPreview) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkPreview])

  return (
    <BrowserRouter>
      {/* 4. (Optional) Pass darkPreview to MainLayout if you want the header/footer to change too */}
      <MainLayout showNavbarLogo={showNavbarLogo} darkPreview={darkPreview}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onIntroComplete={() => setShowNavbarLogo(true)}
                // 5. Pass state and setter down to Home so your toggle button works
                darkPreview={darkPreview}
                setDarkPreview={setDarkPreview}
              />
            }
          />
          {/* You can pass darkPreview to other pages too if needed */}
          <Route path="/about" element={<About darkPreview={darkPreview} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
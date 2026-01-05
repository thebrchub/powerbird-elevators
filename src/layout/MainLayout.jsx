import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// 1. Accept darkPreview here
export default function MainLayout({ children, showNavbarLogo, darkPreview }) {
  const location = useLocation()
  
  // Check if we are on the Home page
  const isHome = location.pathname === '/'

  return (
    // 🔥 FIX: Using bg-gray-950 for that premium deep charcoal look
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      
      {/* 2. PASS THE PROP: darkPreview={darkPreview} 
         Do not write darkPreview={true} or it will be stuck forever!
      */}
      <Navbar showLogo={showNavbarLogo} darkPreview={darkPreview} />

      {/* 🔥 CONDITIONAL SPACING:
          - Home: pt-0 (Content goes behind navbar)
          - Others: pt-24/32 (Content pushed down). 
            The gap created here will reveal the bg-gray-950 from the parent div.
      */}
      <main className={`flex-grow relative z-0 ${isHome ? 'pt-0' : 'pt-0 md:pt-0'}`}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
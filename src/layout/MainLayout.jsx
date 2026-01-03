import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout({ children, showNavbarLogo }) {
  const location = useLocation()
  
  // Check if we are on the Home page
  const isHome = location.pathname === '/'

  return (
    // 🔥 FIX: Using bg-gray-950 for that premium deep charcoal look
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      
      {/* Pass darkPreview=true to ensure Navbar text is white */}
      <Navbar showLogo={showNavbarLogo} darkPreview={true} />

      {/* 🔥 CONDITIONAL SPACING:
          - Home: pt-0 (Content goes behind navbar)
          - Others: pt-24/32 (Content pushed down). 
            The gap created here will reveal the bg-gray-950 from the parent div.
      */}
      <main className={`flex-grow relative z-0 ${isHome ? 'pt-0' : 'pt-16 md:pt-16'}`}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
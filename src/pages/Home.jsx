import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Components
import LiftIntro from '../components/LiftIntro'
import GoogleReviews from '../components/GoogleReviews'
import Reveal from '../components/Reveal'
import ClientLogos from '../components/ClientLogos'
import AboutUs from '../components/AboutUs' 
import WhyUs from '../components/WhyUs'
import CoreCapabilities from '../components/Core'
import ClientFeedback from '../components/ClientFeedback'
import TrustBand from '../components/TrustBand'
import GetInTouchModal from '../components/GetInTouchModal'

import { 
  Sun,
  Moon
} from 'lucide-react'

export default function Home({ onIntroComplete, darkPreview, setDarkPreview }) {

  const [showIntro, setShowIntro] = useState(() => {
    const hasPlayed = sessionStorage.getItem('liftPlayed')
    return !hasPlayed 
  })
  
  const [getInTouchOpen, setGetInTouchOpen] = useState(false)
  const navigate = useNavigate()

  // 🔥 FIX 1: Sync Body Background to eliminate "edge gaps"
  useEffect(() => {
    if (darkPreview) {
      document.body.style.backgroundColor = '#030712' // gray-950
    } else {
      document.body.style.backgroundColor = '#f9fafb' // gray-50
    }
  }, [darkPreview])

  const handleServicesClick = () => {
    navigate('/services')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ================= DARK MODE TOGGLE ================= */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setDarkPreview(!darkPreview)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition text-sm font-semibold"
        >
          {darkPreview ? <Sun size={16} /> : <Moon size={16} />}
          {darkPreview ? 'Light View' : 'Dark View'}
        </button>
      </div>

      {/* ================= LIFT INTRO ================= */}
      {showIntro && (
        <LiftIntro
          onFinish={() => {
            sessionStorage.setItem('liftPlayed', 'true')
            setShowIntro(false)
            onIntroComplete && onIntroComplete()
          }}
        />
      )}

      {/* ================= MODAL ================= */}
      <GetInTouchModal 
        open={getInTouchOpen} 
        onClose={() => setGetInTouchOpen(false)} 
      />

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        // 🔥 FIX 2: Added 'min-h-screen' to fill view
        // 🔥 FIX 3: Added 'transition-colors duration-500' for smooth bg switch
        className={`pt-6 min-h-screen transition-colors duration-500 ${
            darkPreview ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
        }`}
        initial={{ opacity: showIntro ? 0 : 1 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ 
          duration: 1.0, 
          ease: 'easeOut', 
          delay: showIntro ? 0.5 : 0 
        }}
      >

       {/* ================= HERO SECTION ================= */}
        <section 
          // Removed rounded-b-3xl as requested
          className={`relative overflow-hidden transition-colors duration-500 ${
            darkPreview 
              ? 'bg-gray-950 text-white' 
              : 'bg-gray-50 text-gray-900'
          }`}
        >
          
          {/* BACKGROUND ANIMATION */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              
              {/* VERTICAL LINES */}
              <div className="absolute inset-0 flex justify-around">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="relative w-px h-full">
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent transition-opacity duration-500 ${darkPreview ? 'opacity-100' : 'opacity-0'}`} />
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent transition-opacity duration-500 ${darkPreview ? 'opacity-0' : 'opacity-100'}`} />
                  </div>
                ))}
              </div>

              {/* HORIZONTAL MOVING GRID */}
              <motion.div 
                className="absolute inset-0 w-full h-[200%]"
                animate={{ y: [0, "50%"] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              >
                 <div 
                   className={`absolute inset-0 transition-opacity duration-500 ${darkPreview ? 'opacity-100' : 'opacity-0'}`}
                   style={{ background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 100px, rgba(255,255,255,0.05) 101px)' }}
                 />
                 <div 
                   className={`absolute inset-0 transition-opacity duration-500 ${darkPreview ? 'opacity-0' : 'opacity-100'}`}
                   style={{ background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 100px, rgba(0,0,0,0.05) 101px)' }}
                 />
              </motion.div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <Reveal>
                <div className={`flex items-center gap-2 mb-6 transition-colors duration-300 ${darkPreview ? 'text-blue-400' : 'text-blue-600'}`}>
                   <span className="h-px w-8 bg-current"></span> 
                   <span className="text-sm font-bold tracking-[0.2em] uppercase">
                     The Way to Safety and Quality
                   </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Elevating Buildings.<br />
                  <span className="text-blue-500">Empowering Movement.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p 
                  className={`mt-6 max-w-lg text-lg transition-colors duration-300 ${
                    darkPreview ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  PowerBird Elevators provides end-to-end elevator installation,
                  maintenance, and modernization solutions for residential and
                  commercial infrastructure.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex gap-4">
                  <button 
                    onClick={() => setGetInTouchOpen(true)}
                    className="bg-red-600 px-6 py-3 rounded-md font-semibold text-white hover:bg-red-700 transition shadow-lg shadow-red-600/20"
                  >
                    Get in Touch
                  </button>

                  <button 
                    onClick={handleServicesClick}
                    className={`border px-6 py-3 rounded-md transition-all duration-300 ${
                      darkPreview 
                        ? 'border-gray-600 hover:bg-gray-800 text-white' 
                        : 'border-gray-300 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Our Services
                  </button>
                </div>
              </Reveal>
            </div>

            {/* RIGHT VISUAL */}
            <Reveal delay={0.4}>
              <div 
                className={`h-80 rounded-2xl border flex items-center justify-center shadow-2xl relative z-10 overflow-hidden transition-all duration-500 ${
                  darkPreview 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <img 
                  src="/lifts/hero_lift.webp" 
                  alt="PowerBird Elevator System" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= TRUST BAND ================= */}
        <TrustBand darkPreview={darkPreview} />

        {/* ================= ABOUT US ================= */}
        <AboutUs darkPreview={darkPreview} />

        {/* ================= WHY US ================= */}
        <WhyUs darkPreview={darkPreview} />

        {/* ================= GOOGLE REVIEWS ================= */}
        <GoogleReviews darkPreview={darkPreview} />

        {/* ================= CORE CAPABILITIES ================= */}
        <CoreCapabilities darkPreview={darkPreview} />

        {/* ================= TESTIMONIALS ================= */}
        <ClientFeedback darkPreview={darkPreview} />

        <ClientLogos darkPreview={darkPreview} />

        {/* ================= CTA ================= */}
        <section className={`py-24 transition-colors duration-500 ${darkPreview ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                Ready to elevate your infrastructure?
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className={`transition-colors duration-300 ${darkPreview ? 'text-gray-400' : 'text-gray-600'} mt-6 text-lg`}>
                Partner with PowerBird for engineering-led vertical transportation solutions.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <button 
                onClick={() => setGetInTouchOpen(true)}
                className="mt-10 bg-red-600 text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition shadow-lg shadow-red-600/20"
              >
                Request Consultation
              </button>
            </Reveal>
          </div>
        </section>

      </motion.div>
    </>
  )
}
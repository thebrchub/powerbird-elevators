import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LiftIntro from '../components/LiftIntro'
import GoogleReviews from '../components/GoogleReviews'
import Reveal from '../components/Reveal'
import ClientLogos from '../components/ClientLogos'
import AboutUs from '../components/AboutUs' 
import WhyUs from '../components/WhyUs'
import CoreCapabilities from '../components/Core'
import ClientFeedback from '../components/ClientFeedback'
import TrustBand from '../components/TrustBand'

import { 
  CheckCircle2, 
  Settings, 
  TrendingUp, 
  MousePointer2,
  Quote,
  Moon,
  Sun,
  ArrowRight
} from 'lucide-react'

// 🔥 UPDATE: Now accepting darkPreview and setDarkPreview as props from App.js
export default function Home({ onIntroComplete, darkPreview, setDarkPreview }) {

  const [showIntro, setShowIntro] = useState(false)

  // ▶️ Run lift ONLY once per session
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('liftPlayed')
    if (!hasPlayed) {
      setShowIntro(true)
    }
  }, [])

  // 🔥 FIX 1: Force the Body Background to change. 
  useEffect(() => {
    if (darkPreview) {
      document.body.style.backgroundColor = '#030712'; // gray-950
    } else {
      document.body.style.backgroundColor = '#f9fafb'; // gray-50
    }
  }, [darkPreview])

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

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        className={darkPreview ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 1.0, ease: 'easeOut', delay: 0.5 }}
      >

       {/* ================= HERO SECTION ================= */}
        <section 
          // 🔥 FIX: Added 'rounded-b-3xl' to round the bottom corners of the white background
          className={`relative overflow-hidden transition-colors duration-300 rounded-b-3xl ${
            darkPreview 
              ? 'bg-gray-950 text-white' 
              : 'bg-gray-50 text-gray-900'
          }`}
        >
          
          {/* BACKGROUND ANIMATION */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
             <div className="absolute inset-0 flex justify-around">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-px h-full bg-gradient-to-b from-transparent to-transparent ${
                      darkPreview ? 'via-white/10' : 'via-black/10'
                    }`} 
                  />
                ))}
             </div>
             <motion.div 
               className="absolute inset-0 w-full h-[200%]"
               animate={{ y: [0, "50%"] }} 
               transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
               style={{ 
                 background: `repeating-linear-gradient(0deg, transparent 0px, transparent 100px, ${
                   darkPreview ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                 } 101px)`
               }}
             />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <Reveal>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Elevating Buildings.<br />
                  <span className="text-blue-500">Empowering Movement.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p 
                  className={`mt-6 max-w-lg text-lg ${
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
                  <button className="bg-red-600 px-6 py-3 rounded-md font-semibold text-white hover:bg-red-700 transition shadow-lg shadow-red-600/20">
                    Get a Quote
                  </button>
                  <button 
                    className={`border px-6 py-3 rounded-md transition ${
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
                className={`h-80 rounded-2xl border flex items-center justify-center shadow-2xl relative z-10 overflow-hidden transition-colors duration-300 ${
                  darkPreview 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                    : 'bg-white border-gray-200'
                }`}
              >
                {/* 🔥 UPDATE: Using local image */}
                <img 
                  src="/lifts/hero_lift.png" 
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
        <section className={`py-24 ${darkPreview ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className={`text-3xl md:text-4xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                Ready to elevate your infrastructure?
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className={`${darkPreview ? 'text-gray-400' : 'text-gray-600'} mt-6 text-lg`}>
                Partner with PowerBird for engineering-led vertical transportation solutions.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <button className="mt-10 bg-red-600 text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition shadow-lg shadow-red-600/20">
                Request Consultation
              </button>
            </Reveal>
          </div>
        </section>

      </motion.div>
    </>
  )
}
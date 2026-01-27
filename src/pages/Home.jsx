import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Components
import Reveal from '../components/Reveal'
import ClientLogos from '../components/ClientLogos'
import AboutUs from '../components/AboutUs' 
import WhyUs from '../components/WhyUs'
import CoreCapabilities from '../components/Core'
import TrustBand from '../components/TrustBand'
import GetInTouchModal from '../components/GetInTouchModal'
import ServiceGrid from '../components/ServiceGrid'
import GoogleReviews from '../components/GoogleReviews'
import { useState } from 'react'

export default function Home() {
  const [getInTouchOpen, setGetInTouchOpen] = useState(false)
  const navigate = useNavigate()

  const handleServicesClick = () => {
    navigate('/services')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ================= MODAL ================= */}
      <GetInTouchModal 
        open={getInTouchOpen} 
        onClose={() => setGetInTouchOpen(false)} 
      />

      {/* ================= MAIN CONTENT ================= */}
      {/* 🔥 FIX: Removed initial opacity: 0. 
          The page now renders immediately behind the Lift Intro. 
          This eliminates the "Black Gap" and the "Stuck Overlay" issues. */}
      <div className="pt-6 min-h-screen bg-gray-50 text-gray-900">

       {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-gray-50 text-gray-900">
          
          {/* BACKGROUND ANIMATION */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              
              {/* VERTICAL LINES */}
              <div className="absolute inset-0 flex justify-around">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="relative w-px h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent opacity-100" />
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
                   className="absolute inset-0 opacity-100"
                   style={{ background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 100px, rgba(0,0,0,0.05) 101px)' }}
                 />
              </motion.div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-6 text-gray-900">
                  <span className="text-sm font-bold tracking-[0.2em] uppercase">
                    The <span className="text-blue-600">Way</span> to <span className="text-blue-600">Safety</span> and <span className="text-blue-600">Quality</span>
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Elevating Buildings.<br />
                  <span className="text-blue-500">Empowering Movement.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-lg text-lg text-gray-600">
                  PowerBird Elevators provides end-to-end elevator installation,
                  maintenance, and modernization solutions for residential and
                  commercial infrastructure.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex gap-4">
                  <button 
                    onClick={() => setGetInTouchOpen(true)}
                    className="bg-blue-600 px-6 py-3 rounded-md font-semibold text-white hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                  >
                    Get in Touch
                  </button>

                  <button 
                    onClick={handleServicesClick}
                    className="border px-6 py-3 rounded-md transition-all duration-300 border-gray-300 hover:bg-gray-200 text-gray-800"
                  >
                    Our Services
                  </button>
                </div>
              </Reveal>
            </div>

            {/* RIGHT VISUAL */}
            <Reveal delay={0.4}>
              <div className="h-80 rounded-2xl border flex items-center justify-center shadow-2xl relative z-10 overflow-hidden bg-white border-gray-200">
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
        <TrustBand />

        {/* ================= ABOUT US ================= */}
        <AboutUs />

        {/* ================= WHY US ================= */}
        <WhyUs />

        {/* ================= GOOGLE REVIEWS ================= */}
        <GoogleReviews />

        {/* ================= CORE CAPABILITIES ================= */}
        <CoreCapabilities />

        {/* ================= CLIENT LOGOS ================= */}
        <ClientLogos />

        {/* ================= SERVICE GRID ================= */}
        <ServiceGrid />

        {/* ================= CTA ================= */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to elevate your infrastructure?
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-gray-600 mt-6 text-lg">
                Partner with PowerBird for engineering-led vertical transportation solutions.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <button 
                onClick={() => setGetInTouchOpen(true)}
                className="mt-10 bg-blue-600 text-white px-8 py-4 rounded font-bold hover:bg-blue-800 transition shadow-lg shadow-red-600/20"
              >
                Request Consultation
              </button>
            </Reveal>
          </div>
        </section>

      </div>
    </>
  )
}
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Reveal from '../components/Reveal'

// Array length 20
const logoUrls = Array.from({ length: 20 }, (_, i) => `/logos/${i + 1}.webp`)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Smooth wave effect
      staggerChildren: 0.05, 
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  },
}

export default function ClientLogos({ darkPreview = false }) {
  
  // 1. Force Browser to cache images immediately on Mount
  useEffect(() => {
    logoUrls.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <section
      className={`py-20 ${
        darkPreview ? 'bg-gray-950' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <Reveal>
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight ${
                darkPreview ? 'text-white' : 'text-gray-900'
              }`}
            >
              Trusted By Clients Across <span className="text-blue-500">Karnataka</span>
            </h2>
            <div className={`mt-4 h-1.5 w-24 mx-auto rounded-full ${darkPreview ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
        </Reveal>

        {/* LOGO GRID */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // 🔥 FIX 1: Trigger animation EARLIER (margin: 200px)
          // This starts the fade-in before the user even finishes scrolling to it, eliminating the "Empty Space".
          viewport={{ once: true, margin: "200px" }} 
        >
          {logoUrls.map((src, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`
                group flex items-center justify-center p-4 rounded-xl transition-colors duration-300 w-full h-40
                ${darkPreview ? 'hover:bg-gray-900' : 'hover:bg-gray-50'}
              `}
            >
              <img
                src={src}
                alt={`Client ${index + 1}`}
                draggable={false}
                // 🔥 FIX 2: loading="eager" + decoding="sync"
                // This forces the browser to decode the image BEFORE painting the frame.
                // This kills the "Jerk/Pop" effect completely.
                loading="eager"
                decoding="sync"
                className={`
                  max-h-28 w-auto object-contain transition-transform duration-500 ease-out cursor-pointer
                  hover:scale-110 drop-shadow-sm
                  ${darkPreview ? 'opacity-90 hover:opacity-100' : 'opacity-100'}
                `}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
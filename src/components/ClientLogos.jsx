import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

// Array length 20
const logos = Array.from({ length: 20 }, (_, i) => `/logos/${i + 1}.webp`)

// 1. Optimized Container - Faster Stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Reduced from 0.1 to 0.05 so the wave flows faster (less waiting)
      staggerChildren: 0.05, 
      delayChildren: 0.1,
    },
  },
}

// 2. Optimized Item - Premium Easing & Hardware Acceleration
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.95 // subtle scale makes it feel more organic
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      // This custom bezier is "The Smoothness Secret" (similar to Apple's UI)
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
}

export default function ClientLogos({ darkPreview = false }) {
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
          viewport={{ once: true, margin: "-50px" }} // Trigger slightly earlier
        >
          {logos.map((src, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              // 'will-change-transform' forces the browser to use the GPU
              style={{ willChange: "transform, opacity" }} 
              className={`group flex items-center justify-center p-4 rounded-xl transition-colors duration-300 w-full h-40
                ${darkPreview ? 'hover:bg-gray-900' : 'hover:bg-gray-50'}
              `}
            >
              <img
                src={src}
                alt={`Client ${index + 1}`}
                draggable={false}
                loading="lazy"
                // Added decoding="async" to prevent main thread blocking
                decoding="async" 
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
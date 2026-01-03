import { motion } from 'framer-motion'

const logos = Array.from({ length: 18 }, (_, i) => `/logos/${i + 1}.png`)

/**
 * ClientLogos
 * @param {boolean} darkPreview - Theme toggle
 */
export default function ClientLogos({ darkPreview = false }) {
  return (
    <section
      className={`py-20 overflow-hidden ${
        darkPreview ? 'bg-gray-950' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="text-center mb-12">
          <h3
            className={`text-sm uppercase tracking-widest ${
              darkPreview ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Trusted By Clients Across Industries
          </h3>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative overflow-hidden py-4"> {/* Added py-4 to prevent hover clip */}
          <motion.div
            className="flex w-max gap-16 items-center" 
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 130, // Keeping original speed
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((src, index) => (
              <div
                key={index}
                // Increased min-width to accommodate larger logos
                className="flex items-center justify-center min-w-[200px]"
              >
                <img
                  src={src}
                  alt="Client Logo"
                  draggable={false}
                  // Changes: 
                  // 1. h-24 (Increased size)
                  // 2. hover:scale-110 (Pop out animation)
                  // 3. Removed grayscale classes
                  className={`
                    h-24 w-auto object-contain transition-all duration-300 ease-out cursor-pointer
                    hover:scale-110 hover:drop-shadow-xl
                    ${darkPreview ? 'opacity-90 hover:opacity-100' : 'opacity-100'}
                  `}
                />
              </div>
            ))}
          </motion.div>

          {/* EDGE FADES */}
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 w-24 ${
              darkPreview
                ? 'bg-gradient-to-r from-gray-950 to-transparent'
                : 'bg-gradient-to-r from-white to-transparent'
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-24 ${
              darkPreview
                ? 'bg-gradient-to-l from-gray-950 to-transparent'
                : 'bg-gradient-to-l from-white to-transparent'
            }`}
          />
        </div>

      </div>
    </section>
  )
}
import Reveal from '../components/Reveal'

// Array length 20 to include 19.webp and 20.webp
const logos = Array.from({ length: 20 }, (_, i) => `/logos/${i + 1}.webp`)

/**
 * ClientLogos
 * @param {boolean} darkPreview - Theme toggle
 */
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
            {/* 🔥 UPDATED: 
                1. Increased size to 'text-4xl md:text-5xl' (Matches Hero & Service Grid)
                2. Added 'leading-tight' (Fixes line spacing) 
            */}
            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight ${
                darkPreview ? 'text-white' : 'text-gray-900'
              }`}
            >
              Trusted By Clients Across <span className="text-blue-500">Karnataka</span>
            </h2>
            
            {/* Underline decoration */}
            <div className={`mt-4 h-1.5 w-24 mx-auto rounded-full ${darkPreview ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
        </Reveal>

        {/* STATIC LOGO GRID (5 Per Row) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {logos.map((src, index) => (
            <Reveal key={index} delay={index * 0.05}> 
              <div 
                className={`group flex items-center justify-center p-4 rounded-xl transition-colors duration-300 w-full h-40
                  ${darkPreview ? 'hover:bg-gray-900' : 'hover:bg-gray-50'}
                `}
              >
                <img
                  src={src}
                  alt={`Client ${index + 1}`}
                  draggable={false}
                  className={`
                    max-h-28 w-auto object-contain transition-transform duration-500 ease-out cursor-pointer
                    hover:scale-110 drop-shadow-sm
                    ${darkPreview ? 'opacity-90 hover:opacity-100' : 'opacity-100'}
                  `}
                />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
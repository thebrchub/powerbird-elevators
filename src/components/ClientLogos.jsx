import Reveal from '../components/Reveal'

// 1. Changed extension to .webp
const logos = Array.from({ length: 18 }, (_, i) => `/logos/${i + 1}.webp`)

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
            <h3
              className={`text-sm uppercase tracking-widest font-bold ${
                darkPreview ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Trusted By Clients Across Industries
            </h3>
            <div className={`mt-2 h-1 w-20 mx-auto rounded-full ${darkPreview ? 'bg-blue-500/30' : 'bg-blue-100'}`}></div>
          </div>
        </Reveal>

        {/* STATIC LOGO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
          {logos.map((src, index) => (
            <Reveal key={index} delay={index * 0.05}> 
              <div 
                className={`group flex items-center justify-center p-4 rounded-xl transition-colors duration-300 w-full h-32
                  ${darkPreview ? 'hover:bg-gray-900' : 'hover:bg-gray-50'}
                `}
              >
                <img
                  src={src}
                  alt={`Client ${index + 1}`}
                  draggable={false}
                  // 2. REMOVED 'grayscale' and 'invert' classes.
                  // Now showing original colors with a nice hover pop effect.
                  className={`
                    max-h-20 w-auto object-contain transition-transform duration-500 ease-out cursor-pointer
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
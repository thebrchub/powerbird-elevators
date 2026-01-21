import Reveal from './Reveal'
import { MapPin } from 'lucide-react'

export default function ServiceGrid({ darkPreview }) {
  
  // Data from Brochure Page 20 (Service Locations)
  const allCities = [
    "Sirsi", "Kumta", "Bhatkal", "Honnavar", "Karwar",
    "Haveri", "Hubli", "Dharwad", "Belgaum",
    "Ballari", "Hospet", "Davangere",
    "Bangalore", "Shimoga", "Mangalore", "Udupi"
  ];

  return (
    <section className={`py-12 relative overflow-hidden transition-colors duration-300 ${darkPreview ? 'bg-gray-900' : 'bg-gray-50'}`}>
        
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(${darkPreview ? '#ffffff' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${darkPreview ? '#ffffff' : '#000000'} 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <Reveal>
          <div className="text-left">
            <div className="inline-flex items-center justify-center p-3 bg-blue-600/10 rounded-full text-blue-600 mb-6">
              <MapPin size={32} />
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
              The PowerBird <br />
              <span className="text-blue-500">Service Grid</span>
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
              Our network is strategically anchored by our Headquarters in <strong className="text-blue-500">Sirsi</strong> and our Metro Hub in <strong className="text-blue-500">Bengaluru</strong>.
            </p>
            
            {/* Full City List (Pills) */}
            <div>
              <p className={`text-sm font-semibold mb-4 uppercase tracking-wider ${darkPreview ? 'text-gray-500' : 'text-gray-400'}`}>
                Serving 20+ Cities:
              </p>
              
              {/* 🔥 UPDATED LAYOUT: Increased gap for better readability */}
              <div className="flex flex-wrap gap-3">
                {allCities.map((city, i) => (
                  <span 
                    key={i} 
                    // 🔥 UPDATED INTERACTION:
                    // 1. Base: Black BG + White Text (Client Requirement)
                    // 2. Hover: Shifts to Blue + Lifts up + Adds Shadow
                    className={`
                      px-4 py-2 text-xs font-bold rounded-full border transition-all duration-300 cursor-default shadow-sm
                      ${darkPreview 
                        ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20' 
                        : 'bg-black border-black text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20'
                      }
                    `}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= KARNATAKA CONSTELLATION MAP ================= */}
        <Reveal delay={0.2}>
          <div className="relative w-full aspect-[3/4] max-w-3xl mx-auto select-none"> 
            
            {/* The SVG Container */}
            <svg className="w-full h-full filter drop-shadow-2xl" viewBox="0 0 600 750" fill="none" xmlns="http://www.w3.org/2000/svg">
              
              <defs>
                <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* === CONNECTING LINES === */}
              <g className={`stroke-2 ${darkPreview ? 'stroke-gray-800' : 'stroke-gray-300'}`} strokeLinecap="round" strokeLinejoin="round">
                <path d="M160 320 L80 290 L120 600" fill="none" />
                <path d="M160 320 L220 200 L150 80" fill="none" />
                <path d="M220 200 L320 320 L480 250" fill="none" />
                <path d="M160 320 L240 420 L450 620" fill="none" />
                <path d="M120 600 L450 620" fill="none" />
              </g>

              {/* === ANIMATED SIGNALS === */}
              <g stroke="url(#signalGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#glowEffect)">
                <path d="M160 320 L240 420 L450 620" className="animate-draw-line" fill="none" style={{animationDuration: '3s'}} />
                <path d="M150 80 L220 200 L160 320" className="animate-draw-line" fill="none" style={{animationDuration: '4s', animationDelay: '1s'}} />
                <path d="M160 320 L80 290 L120 600" className="animate-draw-line" fill="none" style={{animationDuration: '3.5s', animationDelay: '0.5s'}} />
                <path d="M220 200 L320 320 L480 250" className="animate-draw-line" fill="none" style={{animationDuration: '2.5s', animationDelay: '2s'}} />
              </g>

              {/* === CITIES (Nodes) === */}
              {[
                { x: 160, y: 320, name: "Sirsi (HQ)", main: true },
                { x: 450, y: 620, name: "Bengaluru", main: true },
                { x: 150, y: 80, name: "Belgaum" },
                { x: 220, y: 200, name: "Hubli" },
                { x: 480, y: 250, name: "Ballari" },
                { x: 80, y: 290, name: "Karwar" },
                { x: 320, y: 320, name: "Davangere" },
                { x: 240, y: 420, name: "Shimoga" },
                { x: 120, y: 600, name: "Mangalore" },
              ].map((city, i) => (
                <g key={i} className="group cursor-pointer">
                  <circle 
                    cx={city.x} 
                    cy={city.y} 
                    r={city.main ? 6 : 4} 
                    className={`${city.main ? 'fill-blue-500' : (darkPreview ? 'fill-gray-600' : 'fill-gray-400')} transition-all duration-300 group-hover:fill-blue-400 group-hover:r-6`} 
                    stroke={darkPreview ? "#111827" : "#ffffff"}
                    strokeWidth="2"
                  />
                  <g className={`transition-all duration-300 ${city.main ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                    <rect 
                      x={city.x + 12} 
                      y={city.y - 12} 
                      width={city.name.length * 7 + 12} 
                      height="24" 
                      rx="4" 
                      fill={darkPreview ? "rgba(17, 24, 39, 0.95)" : "rgba(255, 255, 255, 0.95)"} 
                    />
                    <text 
                      x={city.x + 18} 
                      y={city.y + 4} 
                      fontSize="11" 
                      fontWeight="bold" 
                      fill={darkPreview ? "#e5e7eb" : "#1f2937"}
                    >
                      {city.name}
                    </text>
                  </g>
                </g>
              ))}

            </svg>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
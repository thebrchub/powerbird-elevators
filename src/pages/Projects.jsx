import Reveal from '../components/Reveal'
import { 
  Hotel, 
  Home, 
  Stethoscope, 
  ShoppingBag,
  Briefcase,
  Landmark,
  MapPin,
  Zap,
  Moon,
  Sun
} from 'lucide-react'

export default function Projects({ darkPreview, setDarkPreview }) {
  
  // Data from Brochure Page 19 (Client List)
  const clients = [
    "Omkar Jungle Resort",
    "Hotel Ankola International", 
    "Rotary Charitable Hospital",
    "Namadhari Bhavan",
    "TSS (Sirsi)",
    "Pro-Tantrix",
    "Mandara",
    "Kamadhenu",
    "Bappanalli Brothers",
    "Chandrapattan Groups",
    "Wajid Misgar",
    "Lavender Elite",
    "Pradeep's Group",
    "Arga Trust",
    "Vishwa Seva Sami",
    "Om Ganeshaya Namah Constructions"
  ];

  // Data from Brochure Page 20 (Service Locations)
  const allCities = [
    "Sirsi", "Kumta", "Bhatkal", "Honnavar", "Karwar",
    "Haveri", "Hubli", "Dharwad", "Belgaum",
    "Ballari", "Hospet", "Davangere",
    "Bangalore", "Shimoga", "Mangalore", "Udupi"
  ];

  return (
    <div className={`pt-18 transition-colors duration-300 ${darkPreview ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* ================= GLOBAL TOGGLE BUTTON (COMMENTED) ================= */}
      {/* <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setDarkPreview(!darkPreview)} 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition text-sm font-semibold"
        >
          {darkPreview ? <Sun size={16} /> : <Moon size={16} />}
          {darkPreview ? 'Light View' : 'Dark View'}
        </button>
      </div> */}

      {/* ================= HERO SECTION ================= */}
      <section 
        className={`border-b transition-colors duration-300 overflow-hidden relative ${
          darkPreview 
            ? 'bg-gray-950 text-white border-gray-800' 
            : 'bg-white text-gray-900 border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: CONTENT */}
            <Reveal>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Our <span className="text-blue-500">Reach & Portfolio</span>
                </h1>
                
                {/* 🔥 NEW: Quote with Blue Line (Matches About Us) */}
                <div className="mt-8 mb-6">
                  <p className={`text-xl font-bold border-l-4 border-blue-500 pl-4  leading-relaxed ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                    "Trusted by over 400+ clients, delivering vertical reliability across the entire state."
                  </p>
                </div>

                <p className={`text-lg leading-relaxed ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
                  PowerBird elevators are currently operating in approximately 
                  <span className="font-bold text-blue-500"> 20 Cities</span> around Karnataka. 
                  From luxury resorts to critical healthcare facilities, we are the backbone of vertical mobility.
                </p>
              </div>
            </Reveal>

            {/* RIGHT: BLENDED IMAGE */}
            <Reveal delay={0.2}>
              <div className="relative w-full h-[300px] lg:h-[400px]">
                <img 
                  src="/projects/2.webp" 
                  alt="PowerBird Portfolio" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Masks */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${darkPreview ? 'from-gray-950' : 'from-white'} to-transparent`} />
                <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${darkPreview ? 'from-gray-950' : 'from-white'} to-transparent`} />
                <div className={`absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l ${darkPreview ? 'from-gray-950' : 'from-white'} to-transparent`} />
                <div className={`absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r ${darkPreview ? 'from-gray-950' : 'from-white'} to-transparent`} />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      {/* 🔥 TIGHTENED PADDING: py-12 */}
      <section className={`py-12 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className={`text-3xl font-bold mb-8 text-center ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
              Sectors We Serve
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Hotel size={24} />, label: "Hotels" },
              { icon: <Home size={24} />, label: "Residential" },
              { icon: <ShoppingBag size={24} />, label: "Stores" },
              { icon: <Stethoscope size={24} />, label: "Hospitals" },
              { icon: <Briefcase size={24} />, label: "Offices" },
              { icon: <Landmark size={24} />, label: "Govt Sector" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div 
                  className={`flex flex-col items-center justify-center p-6 border rounded-lg transition-all duration-300 group hover:-translate-y-1
                  ${darkPreview 
                    ? 'bg-gray-900 border-gray-800 hover:border-blue-500' 
                    : 'bg-gray-50 border-gray-100 hover:bg-white hover:shadow-lg hover:border-blue-200'}`}
                >
                  <div className="text-gray-400 group-hover:text-blue-500 mb-3 transition-colors">
                    {item.icon}
                  </div>
                  <span className={`font-semibold ${darkPreview ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'}`}>
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED DESIGNS ================= */}
      {/* 🔥 TIGHTENED PADDING: py-12 */}
      <section className={`py-12 transition-colors duration-300 ${darkPreview ? 'bg-gray-900' : 'bg-gray-50'}`}>
         <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h2 className={`text-3xl font-bold mb-10 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                Project Gallery & Finishes
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <Reveal delay={0.1}>
                    <div className={`group rounded-xl overflow-hidden border ${darkPreview ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                            <img 
                                src="/projects/1.webp" 
                                alt="Stainless Steel Series" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white font-bold">Stainless Steel Series</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                                Durable and elegant S.S. Hairline and Mirror finishes, ideal for commercial complexes and offices.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* Card 2 */}
                <Reveal delay={0.2}>
                    <div className={`group rounded-xl overflow-hidden border ${darkPreview ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                            <img 
                                src="/projects/2.webp" 
                                alt="Panoramic Glass Cabins" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white font-bold">Panoramic Glass Cabins</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                                Premium glass capsule lifts that enhance the architectural aesthetics of malls and hotels.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* Card 3 */}
                <Reveal delay={0.3}>
                    <div className={`group rounded-xl overflow-hidden border ${darkPreview ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                            <img 
                                src="/projects/3.webp" 
                                alt="Hospital & Care" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white font-bold">Hospital & Care</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                                Spacious, jerk-free stretcher lifts designed for patient safety and medical efficiency.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
         </div>
      </section>

      {/* ================= NETWORK VISUALIZATION ================= */}
      {/* 🔥 TIGHTENED PADDING: py-12 */}
      <section className={`py-12 relative overflow-hidden transition-colors duration-300 ${darkPreview ? 'bg-gray-900' : 'bg-gray-50'}`}>
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(${darkPreview ? '#ffffff' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${darkPreview ? '#ffffff' : '#000000'} 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          
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
                <div className="flex flex-wrap gap-2">
                  {allCities.map((city, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors
                      ${darkPreview 
                        ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-500' 
                        : 'bg-white border-gray-200 text-gray-600 hover:border-blue-400'}`}
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

      {/* ================= NOTABLE CLIENTS (Page 19) ================= */}
      {/* 🔥 TIGHTENED PADDING: py-12 */}
      <section className={`py-12 relative overflow-hidden transition-colors duration-300 ${darkPreview ? 'bg-gray-900' : 'bg-gray-50'}`}>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="mb-8 border-l-4 border-blue-500 pl-6">
              <h2 className={`text-3xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>Trusted Clientele</h2>
              <p className={`mt-2 ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`}>Selected projects from our diverse portfolio</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div 
                  className={`flex items-center gap-3 p-4 border rounded transition-colors
                  ${darkPreview 
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500 text-gray-300' 
                    : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-md text-gray-700'}`}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></div>
                  <span className="text-sm font-medium tracking-wide">
                    {client}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
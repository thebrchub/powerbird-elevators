import React from 'react'
import Reveal from './Reveal' 
import { motion } from 'framer-motion'
import { 
  Hotel, 
  Home, 
  Stethoscope, 
  ShoppingBag,
  Briefcase,
  Landmark
} from 'lucide-react'

export default function SectorsAndGallery({ darkPreview }) {
  return (
    <div>
      {/* ================= SECTORS (ATMOSPHERIC EDITION) ================= */}
      <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${darkPreview ? 'bg-[#050505]' : 'bg-slate-50'}`}>
        
        {/* ATMOSPHERE BACKGROUND */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className={`absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 mix-blend-screen ${darkPreview ? 'bg-blue-900' : 'bg-blue-300'}`} />
            <motion.div 
               className="absolute w-[700px] h-[700px] border border-dashed border-blue-500/10 rounded-full"
               animate={{ rotate: 360 }}
               transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full blur-[1px]" />
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full blur-[1px]" />
            </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            {/* 🔥 FIX: Removed 'text-center' to align LEFT, matching the Gallery section */}
            <div className="mb-16">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border ${darkPreview ? 'bg-blue-900/20 border-blue-800 text-blue-300' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                   Global Standards
                </span>
                
                <h2 className={`text-3xl font-bold mb-6 tracking-tight ${darkPreview ? 'text-white' : 'text-slate-900'}`}>
                  Engineered for Every Sector
                </h2>

                {/* 🔥 FIX: Removed 'mx-auto' so the text stays on the left */}
                <p className={`max-w-2xl text-lg leading-relaxed ${darkPreview ? 'text-slate-400' : 'text-slate-600'}`}>
                    From high-speed commercial elevators to precision-controlled hospital lifts, our engineering adapts to your world.
                </p>
            </div>
          </Reveal>

          {/* THE GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { icon: <Hotel size={28} />, label: "Hotels", sub: "Guest Experience" },
              { icon: <Home size={28} />, label: "Residential", sub: "Home Comfort" },
              { icon: <ShoppingBag size={28} />, label: "Retail", sub: "High Traffic" },
              { icon: <Stethoscope size={28} />, label: "Hospitals", sub: "Zero Jerk" },
              { icon: <Briefcase size={28} />, label: "Offices", sub: "Corporate" },
              { icon: <Landmark size={28} />, label: "Public", sub: "Govt. Infra" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div 
                  className={`
                    group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl transition-all duration-500 border cursor-default overflow-hidden
                    hover:-translate-y-2
                    ${darkPreview 
                      ? 'bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-blue-500/50' 
                      : 'bg-white/60 backdrop-blur-md border-white/60 hover:bg-white hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5'}
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:to-blue-500/5 transition-all duration-500" />

                  <div className={`
                    relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 rotate-3 group-hover:rotate-0
                    ${darkPreview 
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400 group-hover:text-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                        : 'bg-gradient-to-br from-white to-slate-50 text-slate-500 shadow-sm group-hover:text-blue-600 group-hover:shadow-md'}
                  `}>
                    {item.icon}
                  </div>

                  <h3 className={`font-bold text-lg mb-1 transition-colors ${darkPreview ? 'text-slate-200 group-hover:text-white' : 'text-slate-800'}`}>
                    {item.label}
                  </h3>
                  <p className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${darkPreview ? 'text-slate-600 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-600'}`}>
                    {item.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED DESIGNS (UNCHANGED) ================= */}
      <section className={`py-12 transition-colors duration-300 ${darkPreview ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h2 className={`text-3xl font-bold mb-10 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                Project Gallery & Finishes
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
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
    </div>
  )
}
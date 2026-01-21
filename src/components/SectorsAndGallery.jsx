import React from 'react'
import Reveal from './Reveal' // Adjust path based on your folder structure
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
      {/* ================= SECTORS ================= */}
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
    </div>
  )
}
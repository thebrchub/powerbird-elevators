import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectorsAndGallery from '../components/SectorsAndGallery'
import { 
  Building2, 
  FileText, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  Briefcase,
  Leaf,
  Award,
  MapPin,
  Play 
} from 'lucide-react'

export default function About({ darkPreview, setDarkPreview }) {
  
  // State to manage Video Playback
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Locations extracted from PowerBird Brochure
  const serviceLocations = [
    "Sirsi", "Kumta", "Bhatkal", "Honnavar", 
    "Karwar", "Haveri", "Hubli", "Dharwad", 
    "Belgum", "Ballari", "Hosapete", "Davangere", 
    "Bangalore", "Shimogga", "Mangalore", "Udupi"
  ];

  return (
    <div className={`pt-18 min-h-screen transition-colors duration-300 ${darkPreview ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* ================= HERO SECTION (FIXED BLEND) ================= */}
      <section 
        className={`border-b transition-colors duration-300 overflow-hidden relative ${
          darkPreview 
            ? 'bg-gray-950 text-white border-gray-800' 
            : 'bg-white text-gray-900 border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: CONTENT (GOLD CONTENT - UNTOUCHED) */}
            <Reveal>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  About <span className="text-blue-500">PowerBird Elevators</span>
                </h1>
                
                <div className={`mt-6 text-lg leading-relaxed space-y-6 ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p className="text-gray-900 font-bold tracking-widest uppercase text-sm">
                    The <span className="text-blue-600">Way</span> to <span className="text-blue-600">Safety</span> and <span className="text-blue-600">Quality</span>
                  </p>
                  
                  <p className={`text-xl font-bold border-l-4 border-blue-500 pl-4 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                    "We are the First and Best Elevator Company in the entire North Canara Region (Uttar Kannada)."
                  </p>

                  <p>
                    Recognized by the <strong>Government of Karnataka</strong> for safety compliance, we combine decades of expertise with ISO-certified standards to deliver vertical transportation that you can trust.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* RIGHT: BLENDED IMAGE (CORNER FIX) */}
            <Reveal delay={0.2}>
              {/* 🔥 FIX: Removed 'rounded-2xl' and 'overflow-hidden'. 
                  This removes the sharp corner artifact. */}
              <div className="relative w-full h-[300px] lg:h-[400px]">
                <img 
                  src="/hero/2.webp" 
                  alt="PowerBird Elevator Interior" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Masks - Increased sizes to h-32/w-32 for smoother blending */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${darkPreview ? 'from-gray-950' : 'from-white'} to-transparent`} />
                <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${darkPreview ? 'from-gray-950' : 'from-white'} to-transparent`} />
                <div className={`absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l ${darkPreview ? 'from-gray-950' : 'from-white'} to-transparent`} />
                <div className={`absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r ${darkPreview ? 'from-gray-950' : 'from-white'} to-transparent`} />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================= CORPORATE PROFILE ================= */}
      <section className={`py-24 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <Reveal>
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6
                ${darkPreview ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                 <Building2 size={14} /> COMPANY PROFILE
              </div>
              
              <h2 className={`text-3xl font-bold mb-6 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                12+ Years of Engineering Excellence
              </h2>

              <p className={`leading-relaxed mb-6 text-lg ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                Utilizing advanced technological prowess, PowerBird has remained a top elevator supplier 
                in the vertical transportation market. Our creative, innovative spirit is represented 
                by the production of elevator group-control systems that use <strong>artificial intelligence technologies</strong>.
              </p>

              <p className={`leading-relaxed border-l-4 border-blue-500 pl-6 italic ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
                "We understand our responsibilities as a good corporate citizen and continue to implement 
                measures for protecting the environment and ensuring a sustainable society for future generations."
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-8 sm:items-center">
                 <div className="flex flex-col">
                    <span className={`text-4xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>12+</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Years Experience</span>
                 </div>
                 
                 <div className={`hidden sm:block w-px h-12 ${darkPreview ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                 
                 <div className="flex flex-col">
                    <span className={`text-4xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>20+</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Cities Covered</span>
                 </div>
                 
                 <div className={`hidden sm:block w-px h-12 ${darkPreview ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                 
                 <div className="flex flex-col">
                    <span className={`text-4xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>24/7</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Emergency Service</span>
                 </div>
              </div>
            </div>
          </Reveal>

          {/* ================= CAPABILITIES CARD ================= */}
          <Reveal delay={0.2}>
            <div className={`rounded-xl p-8 relative overflow-hidden border transition-colors duration-300
              ${darkPreview ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>

              <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                <Briefcase className="text-blue-600" size={20} />
                Our Product Range
              </h3>

              <div className="space-y-4">
                {[
                  'Passenger & Capsule Lifts',
                  'Hospital Stretcher Lifts',
                  'Heavy Duty Goods Lifts',
                  'Dumbwaiter Systems',
                  'Stair Lifts (Home Mobility)',
                  'Machine Room-Less (MRL) Lifts'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="text-blue-500 mt-0.5 shrink-0" size={18} />
                    <span className={`font-medium transition-colors ${darkPreview ? 'text-gray-300 group-hover:text-blue-400' : 'text-gray-700 group-hover:text-blue-700'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`mt-8 pt-6 border-t ${darkPreview ? 'border-gray-800' : 'border-gray-200'}`}>
                <p className="text-xs text-gray-500 font-mono">
                  SPECIALIZATION: AI CONTROL & GREEN TECH
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ================= NEW COMPONENT INSERTED HERE ================= */}
      <SectorsAndGallery darkPreview={darkPreview} />


      {/* ================= CERTIFICATIONS ================= */}
      <section 
        className={`py-24 relative overflow-hidden transition-colors duration-300
        ${darkPreview ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`} 
      >
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Certifications & Compliance</h2>
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">Authorized & Verified</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* CARD 1 */}
            <Reveal delay={0.1}>
              {/* 🔥 FIX: Added 'h-full' to make cards equal height */}
              <div className={`border p-8 rounded-lg flex flex-col sm:flex-row items-start gap-6 hover:border-blue-500 transition-colors duration-300 h-full
                ${darkPreview 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-white border-gray-200 shadow-sm'
                }`}>
                
                <div className={`p-3 rounded-md border shrink-0 ${darkPreview ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
                   <Award className="text-yellow-500" size={24} />
                </div>
                <div>
                   <p className="text-xs text-gray-500 font-mono uppercase mb-1">Quality Management System</p>
                   <h3 className={`text-xl font-bold tracking-wide ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                     ISO 9001:2015 Certified
                   </h3>
                   <div 
                    className={`mt-3 inline-block px-2 py-0.5 rounded text-xs border ${
                      darkPreview 
                        ? 'bg-yellow-900/30 border-yellow-800 text-yellow-500' 
                        : 'bg-yellow-50 border-yellow-200 text-yellow-700'
                    }`}
                  >
                    International Standard
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CARD 2 */}
            <Reveal delay={0.2}>
              {/* 🔥 FIX: Added 'h-full' to make cards equal height */}
              <div className={`border p-8 rounded-lg flex flex-col sm:flex-row items-start gap-6 hover:border-blue-500 transition-colors duration-300 h-full
                ${darkPreview 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-white border-gray-200 shadow-sm'
                }`}>
                
                <div className={`p-3 rounded-md border shrink-0 ${darkPreview ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
                   <FileText className="text-blue-400" size={24} />
                </div>
                <div>
                   <p className="text-xs text-gray-500 font-mono uppercase mb-1">Statutory Approval</p>
                   <h3 className={`text-xl font-bold tracking-wide ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                     Govt. of Karnataka
                   </h3>
                   <p className="text-sm text-gray-400 mt-1">Authorized for Elevator Installation & Services</p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================= OPERATIONAL STANDARDS (FIXED EQUAL HEIGHT) ================= */}
      <section className={`py-24 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className={`text-3xl font-bold mb-12 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
              Why Choose PowerBird?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Safety',
                desc: 'Equipped with Automatic Rescue Devices (ARD) and Multi-beam door sensors (10mm-1580mm range) to ensure passenger safety at all times.',
                icon: <ShieldCheck size={32} />,
                color: 'text-red-600'
              },
              {
                title: '70% Energy Saving',
                desc: 'Our Permanent Magnet (PM) Motors and LED lighting systems reduce power consumption by approx. 70% compared to traditional systems.',
                icon: <Leaf size={32} />,
                color: 'text-green-600'
              },
              {
                title: 'Smart Technology',
                desc: 'We use AI-driven group control systems and Variable Voltage Variable Frequency (VVVF) drives for smooth, seamless, and jerk-free operation.',
                icon: <Cpu size={32} />,
                color: 'text-blue-600'
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                {/* 🔥 FIX: Added 'h-full' to make cards equal height */}
                <div className={`group border p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full
                  ${darkPreview 
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700' 
                    : 'bg-white border-gray-200'
                  }`}>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className={`${item.color} p-3 rounded-lg border border-transparent transition-all
                      ${darkPreview 
                        ? 'bg-gray-800 group-hover:bg-gray-700 group-hover:border-gray-600' 
                        : 'bg-gray-50 group-hover:bg-white group-hover:border-gray-200'
                      }`}>
                      {item.icon}
                    </div>
                    <span className={`text-4xl font-bold transition-colors
                      ${darkPreview ? 'text-gray-800 group-hover:text-gray-700' : 'text-gray-100 group-hover:text-gray-200'}`}>
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>

                  <p className={`leading-relaxed text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 🔥 VIDEO SECTION ================= */}
      <section className={`py-16 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 
              ${darkPreview ? 'border-gray-800' : 'border-white'}`}>
              
              {!isVideoPlaying ? (
                <div 
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {/* Custom Thumbnail */}
                  <img 
                    src="/lifts/thumbnail.webp"  
                    alt="PowerBird Corporate Story"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white pl-1 shadow-lg">
                        <Play size={28} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/BKgzMNLxoGA?autoplay=1&rel=0&modestbranding=1" 
                  title="PowerBird Elevators Corporate Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}

            </div>
            
            <div className="mt-6 text-center">
               <p className={`text-sm font-bold tracking-widest uppercase ${darkPreview ? 'text-gray-500' : 'text-gray-500'}`}>
                 The PowerBird Story
               </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICE REGIONS =================
      <section className={`py-20 border-t transition-colors duration-300 ${darkPreview ? 'bg-black border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                <MapPin size={24} />
              </div>
              <h2 className={`text-3xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                Serving Across Karnataka
              </h2>
              <p className={`mt-3 ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                Delivering excellence to major cities and districts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceLocations.map((city, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-center p-4 rounded-lg border font-medium text-center transition-colors
                  ${darkPreview 
                    ? 'bg-gray-900 border-gray-800 text-gray-300 hover:border-blue-500 hover:text-white' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {city}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section> */}


    </div>
  )
}
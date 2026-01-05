import Reveal from '../components/Reveal'
import { 
  Wrench, 
  ArrowUpCircle, 
  ShieldCheck, 
  RefreshCw, 
  Settings, 
  HardHat,
  ChevronRight,
  Zap,
  TrendingUp,
  Box,
  Accessibility,
  Moon,
  Sun
} from 'lucide-react'

// 🔥 STEP 1: Accept global props
export default function Services({ darkPreview, setDarkPreview }) {

  return (
    // 🔥 STEP 2: Use global state for the main wrapper
    <div className={`pt-18 transition-colors duration-300 ${darkPreview ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* ================= GLOBAL TOGGLE BUTTON ================= */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setDarkPreview(!darkPreview)} 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition text-sm font-semibold"
        >
          {darkPreview ? <Sun size={16} /> : <Moon size={16} />}
          {darkPreview ? 'Light View' : 'Dark View'}
        </button>
      </div>

      {/* ================= HERO ================= */}
      <section 
        className={`border-b transition-colors duration-300 ${
          darkPreview 
            ? 'bg-gray-950 text-white border-gray-800' 
            : 'bg-white text-gray-900 border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Reveal>
            {/* 🔥 UPDATE: Added Blinking Dot Structure Here */}
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-red-900/20 border border-red-800 text-red-500 text-xs font-mono mb-4">
               
               {/* The Blinking Dot */}
               <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
               </div>

               {/* The Text & Icon */}
               <span className="flex items-center gap-2 font-bold tracking-wide">
                 <Zap size={12} /> 24/7 EMERGENCY SERVICE AVAILABLE
               </span>
            </div>

            <h1 className="text-4xl font-bold">
              Our <span className="text-blue-500">Elevator Services</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className={`mt-4 max-w-2xl text-lg ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
              From preliminary lift installation to comprehensive maintenance. 
              Authorized by the Government of Karnataka and ISO 9001:2015 Certified.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= INSTALLATION SERVICES ================= */}
      <section className={`py-24 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">

          <div
            className={`flex flex-col md:flex-row md:items-end justify-between mb-16 border-b pb-8
            ${darkPreview ? 'border-gray-800' : 'border-gray-200'}`}
          >
            <Reveal>
              <div>
                <h2 className={`text-3xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                  Installation Services
                </h2>
                <p className={`mt-2 ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`}>
                  We provide a complete range of vertical transportation solutions.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Passenger Lifts', desc: 'Advanced comfort and safety for residential and commercial buildings.', icon: <ArrowUpCircle />, image: '/lifts/1.png' },
              { title: 'Capsule Lifts', desc: 'Panoramic glass cabins that enhance the architectural aesthetics of your building.', icon: <Settings />, image: '/lifts/2.png' },
              { title: 'Hospital Lifts', desc: 'Stretcher-compliant designs ensuring jerk-free movement for patients.', icon: <ShieldCheck />, image: '/lifts/3.png' },
              { title: 'Goods Lifts', desc: 'Heavy-duty solutions for transporting materials in industrial settings.', icon: <HardHat />, image: '/lifts/4.png' },
              { title: 'Dumbwaiter Lifts', desc: 'Compact lifts for hotels and restaurants to transport food and small items.', icon: <Box />, image: '/lifts/5.png' },
              { title: 'Stair Lifts', desc: 'Empowering the elderly and special needs individuals with safe home mobility.', icon: <Accessibility />, image: '/lifts/6.png' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className={`group border rounded-lg overflow-hidden transition-all duration-300
                  ${
                    darkPreview
                      ? 'bg-gray-900 border-gray-800 hover:border-blue-500'
                      : 'bg-gray-50 border-gray-200 hover:bg-white hover:border-blue-500'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-gray-400 group-hover:text-blue-500 mb-4 transition-colors">
                      {item.icon}
                    </div>

                    <h3 className={`text-xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>

                    <p className={`mt-3 text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-gray-400">
                      Details <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================= MAINTENANCE & SAFETY ================= */}
      {/* Switches between Dark Gray (gray-900) and Light Gray (gray-50) */}
      <section 
        className={`py-24 transition-colors duration-300 ${
          darkPreview ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className={`h-px flex-1 ${darkPreview ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              <h2 className="text-3xl font-bold">Maintenance & Safety</h2>
              <div className={`h-px flex-1 ${darkPreview ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '24/7 Emergency Service', sub: 'Always Available', desc: 'Round-the-clock emergency support for entrapments and critical failures.' },
              { title: 'Safety Gear Checks', sub: 'Govt Authorized', desc: 'Regular inspection of governors, buffers, and safety gears to meet statutory requirements.' },
              { title: 'ARD Testing', sub: 'Power Failure Safety', desc: 'Ensuring Automatic Rescue Devices function correctly during outages.' },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div 
                  className={`relative p-6 border rounded hover:border-blue-500 transition duration-300
                  ${darkPreview 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="absolute top-4 right-4 text-xs font-mono text-gray-500">
                    Priority-0{i + 1}
                  </div>
                  <h3 className="text-blue-400 font-mono text-xs uppercase mb-2 tracking-wider">{service.sub}</h3>
                  <h4 className={`text-xl font-bold mb-3 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>{service.title}</h4>
                  <p className={`text-sm leading-relaxed ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODERNIZATION ================= */}
      <section className={`py-24 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className={`text-3xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                Modernization & Retrofit
              </h2>
              <div className="w-20 h-1 bg-green-600 my-6"></div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className={`${darkPreview ? 'text-gray-400' : 'text-gray-600'} text-lg mb-8`}>
                Upgrade your old elevator to modern standards with AI control and energy-efficient systems.
              </p>
            </Reveal>

            <div className="space-y-4">
              {[
                'Energy Saving: Approx 70% reduction in power consumption.',
                'Motor Upgrade: From Induction Motor to Permanent Magnet (PM) Motor.',
                'Control Upgrade: From Relay Logic to Microcomputer AI Control.',
                'Lighting: Long-life LED systems (12.5x longer life).'
              ].map((point, i) => (
                <Reveal key={i} delay={0.2 + i * 0.05}>
                  <div className="flex items-start gap-3">
                    <TrendingUp size={20} className="text-green-600 mt-1" />
                    <p className={darkPreview ? 'text-gray-400' : 'text-gray-700'}>
                      {point}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.3}>
            <div 
              className={`p-8 rounded-2xl shadow-xl border 
              ${darkPreview 
                ? 'bg-gray-900 border-gray-800' 
                : 'bg-white border-gray-100 shadow-gray-200/50'
              }`}
            >
              <div className="text-center mb-6">
                <RefreshCw className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className={`text-xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>Technology Migration</h3>
                <p className="text-sm text-gray-500">Performance Upgrade Matrix</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= AMC CTA ================= */}
      <section 
        className={`border-t transition-colors duration-300 ${
          darkPreview 
            ? 'bg-gray-950 border-gray-800' 
            : 'bg-white border-gray-200'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <Reveal>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
              Authorized Maintenance Contracts
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className={`mb-10 max-w-2xl mx-auto ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
              Our service network covers over 20 cities including Bangalore, Sirsi, Hubli, and Mangalore.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <button className="bg-blue-600 text-white px-8 py-4 rounded font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 mx-auto shadow-lg shadow-blue-600/20">
              <Wrench size={18} />
              Request AMC Quote
            </button>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
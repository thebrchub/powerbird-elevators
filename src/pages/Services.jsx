import { useState } from 'react'
import ModalShell from '../components/ModalShell'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import AmcQuoteForm from '../components/AmcQuoteForm' // <--- IMPORTED THE NEW FORM
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
  ArrowRight
} from 'lucide-react'

// Import all 6 Service Modals
import PassengerLiftModal from '../modals/PassengerLiftModal'
import CapsuleLiftModal from '../modals/CapsuleLiftModal'
import HospitalLiftModal from '../modals/HospitalLiftModal'
import GoodsLiftModal from '../modals/GoodsLiftModal'
import DumbwaiterModal from '../modals/DumbwaiterModal'
import StairLiftModal from '../modals/StairLiftModal'

export default function Services({ darkPreview, setDarkPreview }) {

  // State to track which service modal is currently open (null = none)
  const [activeModal, setActiveModal] = useState(null)
  
  // State for AMC Quote Modal
  const [isAmcOpen, setAmcOpen] = useState(false)

  // Data for the Installation Services Grid
  const liftServices = [
    { 
      id: 'passenger', 
      title: 'Passenger Lifts', 
      desc: 'Advanced comfort and safety for residential and commercial buildings.', 
      icon: <ArrowUpCircle />, 
      image: '/lifts/1.webp' 
    },
    { 
      id: 'capsule', 
      title: 'Capsule Lifts', 
      desc: 'Panoramic glass cabins that enhance the architectural aesthetics of your building.', 
      icon: <Settings />, 
      image: '/lifts/2.webp' 
    },
    { 
      id: 'hospital', 
      title: 'Hospital Lifts', 
      desc: 'Stretcher-compliant designs ensuring jerk-free movement for patients.', 
      icon: <ShieldCheck />, 
      image: '/lifts/3.webp' 
    },
    { 
      id: 'goods', 
      title: 'Goods Lifts', 
      desc: 'Heavy-duty solutions for transporting materials in industrial settings.', 
      icon: <HardHat />, 
      image: '/lifts/4.webp' 
    },
    { 
      id: 'dumbwaiter', 
      title: 'Dumbwaiter Lifts', 
      desc: 'Compact lifts for hotels and restaurants to transport food and small items.', 
      icon: <Box />, 
      image: '/lifts/5.webp' 
    },
    { 
      id: 'stair', 
      title: 'Stair Lifts', 
      desc: 'Empowering the elderly and special needs individuals with safe home mobility.', 
      icon: <Accessibility />, 
      image: '/lifts/6.webp' 
    },
  ]

  return (
    <div className={`pt-18 transition-colors duration-300 ${darkPreview ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      <SEO 
        title="Elevator Installation & AMC Services in Karnataka | Powerbird"
        description="Comprehensive lift services including Passenger, Hospital, and Goods lift installations. We offer 24/7 emergency support and AMC modernization in Hubli, Sirsi, and Karwar."
        keywords="elevator installation karnataka, lift amc services hubli, passenger lift manufacturers, hospital lift installation, elevator modernization, dumbwaiter lifts, lift maintenance sirsi"
        url="https://powerbirdelevators.in/services"
      />

      {/* ================= HERO SECTION ================= */}
      <section 
        className={`border-b transition-colors duration-300 overflow-hidden relative ${
          darkPreview 
            ? 'bg-gray-950 text-white border-gray-800' 
            : 'bg-white text-gray-900 border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: CONTENT */}
            <Reveal>
              <div>
                {/* Emergency Badge - Yellow & Black */}
                  {/* Emergency Badge - Translucent Yellow (Matched to Card) */}
<div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-600/20 text-yellow-700 text-xs font-mono mb-6 backdrop-blur-sm">
    <div className="relative flex h-2 w-2">
        {/* Ping Animation - Yellow-600 */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-600 opacity-75"></span>
        {/* Solid Dot - Yellow-600 */}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-600"></span>
    </div>
    <span className="flex items-center gap-2 font-bold tracking-wide">
        <Zap size={12} className="text-yellow-600" /> 24/7 EMERGENCY SERVICE
    </span>
</div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Our <span className="text-blue-500">Elevator Services</span>
                </h1>
                
                {/* Quote with Blue Line */}
                <div className="mt-8 mb-6">
                  <p className={`text-xl font-bold border-l-4 border-blue-500 pl-4 leading-relaxed ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                    "Engineering vertical transportation with precision, safety, and uncompromising quality."
                  </p>
                </div>
                
                <p className={`text-lg leading-relaxed ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
                  We don't just install elevators; we ensure they run safely for a lifetime. From precision engineering to round-the-clock maintenance, we are the partner you can rely on for vertical mobility.
                </p>
              </div>
            </Reveal>

            {/* RIGHT: BLENDED IMAGE */}
            <Reveal delay={0.2}>
              <div className="relative w-full h-[300px] lg:h-[400px]">
                <img 
                  src="/hero/3.webp" 
                  alt="Elevator Services" 
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

      {/* ================= INSTALLATION SERVICES GRID ================= */}
      <section className={`py-24 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">

          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 border-b pb-8 ${darkPreview ? 'border-gray-800' : 'border-gray-200'}`}>
            <Reveal>
              <div>
                <h2 className={`text-3xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                  Installation Services
                </h2>
                <p className={`mt-2 ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`}>
                  Customized solutions for residential, commercial, and industrial needs.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {liftServices.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  onClick={() => setActiveModal(item.id)}
                  className={`group border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer
                  ${darkPreview 
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

                    <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-blue-500 transition-colors">
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
              { title: 'Safety Gear Checks', sub: 'Preventive Care', desc: 'Regular inspection of governors, buffers, and safety gears to meet statutory requirements.' },
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

      {/* ================= MODERNIZATION (WITH MATRIX) ================= */}
      <section className={`py-24 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT */}
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
                    <TrendingUp size={20} className="text-green-600 mt-1 shrink-0" />
                    <p className={darkPreview ? 'text-gray-400' : 'text-gray-700'}>
                      {point}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT: FEATURE BOX (CLEANER & ALIGNED MATRIX) */}
          <Reveal delay={0.3}>
            <div 
              className={`p-8 rounded-2xl shadow-xl border relative overflow-hidden group
              ${darkPreview 
                ? 'bg-gray-900 border-gray-800' 
                : 'bg-white border-gray-100 shadow-gray-200/50'
              }`}
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>

              {/* Header */}
              <div className="text-center mb-8 relative z-10">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors
                  ${darkPreview ? 'bg-gray-800 text-green-500' : 'bg-green-50 text-green-600'}
                `}>
                  <RefreshCw className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>Technology Migration</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mt-1">Performance Upgrade Matrix</p>
              </div>

              {/* Grid-Based Matrix (Perfect Alignment) */}
              <div className={`rounded-xl border p-6 ${darkPreview ? 'bg-gray-950/50 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
                
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <div className="text-left">Legacy</div>
                  <div className="w-6"></div> {/* Spacer for arrow */}
                  <div className="text-right">Modern</div>
                </div>

                {/* Rows */}
                <div className="space-y-5">
                  {[
                    { old: 'Induction Motor', new: 'PM Gearless Motor' },
                    { old: 'Relay Logic', new: 'AI Microcomputer' },
                    { old: 'High Power Usage', new: '70% Energy Saved', highlight: true }
                  ].map((item, idx) => (
                    <div key={idx} className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center group/row">
                      
                      {/* Old (Left) - Faded Out */}
                      <div className={`text-sm font-medium text-left transition-colors
                        ${darkPreview ? 'text-gray-600 group-hover/row:text-gray-500' : 'text-gray-400 group-hover/row:text-gray-500'}`}>
                        {item.old}
                      </div>

                      {/* Arrow (Center) */}
                      <div className="flex justify-center w-6">
                        <ArrowRight className="w-4 h-4 text-gray-300" /> 
                      </div>

                      {/* New (Right) - Bold */}
                      <div className={`text-sm font-bold text-right
                        ${item.highlight ? 'text-green-500' : (darkPreview ? 'text-white' : 'text-gray-900')}`}>
                        {item.new}
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-green-600 bg-green-500/10 py-2 rounded-lg font-medium text-sm">
                <Zap size={16} />
                <span>Eco-Friendly Upgrade</span>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= AMC CTA (WITH FORM) ================= */}
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
              Get a custom maintenance plan for your building today.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <button 
              onClick={() => setAmcOpen(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 mx-auto shadow-lg shadow-blue-600/20"
            >
              <Wrench size={18} />
              Request AMC Quote
            </button>
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICE MODALS ================= */}
      <PassengerLiftModal isOpen={activeModal === 'passenger'} onClose={() => setActiveModal(null)} darkPreview={darkPreview} />
      <CapsuleLiftModal isOpen={activeModal === 'capsule'} onClose={() => setActiveModal(null)} darkPreview={darkPreview} />
      <HospitalLiftModal isOpen={activeModal === 'hospital'} onClose={() => setActiveModal(null)} darkPreview={darkPreview} />
      <GoodsLiftModal isOpen={activeModal === 'goods'} onClose={() => setActiveModal(null)} darkPreview={darkPreview} />
      <DumbwaiterModal isOpen={activeModal === 'dumbwaiter'} onClose={() => setActiveModal(null)} darkPreview={darkPreview} />
      <StairLiftModal isOpen={activeModal === 'stair'} onClose={() => setActiveModal(null)} darkPreview={darkPreview} />

      {/* ================= AMC REQUEST MODAL (CLEAN VERSION) ================= */}
      <ModalShell 
        open={isAmcOpen} 
        onClose={() => setAmcOpen(false)} 
        title="Get AMC Quotation"
        darkPreview={darkPreview}
      >
        {/* REPLACED THE OLD FORM WITH THE NEW COMPONENT */}
        <AmcQuoteForm />
        
      </ModalShell>

    </div>
  )
}
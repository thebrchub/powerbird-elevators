import { useState } from 'react'
import Reveal from '../components/Reveal'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  AlertCircle,
  MessageSquare
} from 'lucide-react'

export default function Contact() {
  const [requirementType, setRequirementType] = useState('')
  const [projectType, setProjectType] = useState('')
  const [activeMap, setActiveMap] = useState('sirsi')


  const showCustomField =
    requirementType === 'Custom Elevator Solution' ||
    projectType === 'Other'

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Reveal>
            <h1 className="text-4xl font-bold">
              Contact <span className="text-blue-500">PowerBird Elevators</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-gray-300 max-w-xl text-lg">
              Reach out to our engineering team for consultations, quotations, 
              installations, or emergency maintenance support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* ================= LEFT: TECHNICAL FORM ================= */}
          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                
                {/* Form Header */}
                <div className="bg-gray-50 px-8 py-6 border-b border-gray-200 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <MessageSquare size={20} className="text-blue-600"/>
                      Project Inquiry
                    </h2>
                    <p className="text-xs text-gray-500 font-mono mt-1">REF: WEB-FORM-01</p>
                  </div>
                  <div className="hidden sm:block">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-xs font-bold text-green-700">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Support Online
                    </span>
                  </div>
                </div>

                {/* Form Body */}
                <form className="p-8 space-y-6">
                  
                  {/* Personal Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                      <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input type="email" placeholder="name@company.com" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" />
                  </div>

                  {/* Technical Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Requirement Type</label>
                      <div className="relative">
                        <select 
                          value={requirementType}
                          onChange={(e) => setRequirementType(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 appearance-none focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                        >
                          <option value="">Select Requirement...</option>
                          <option>Passenger Elevator</option>
                          <option>Industrial Elevator</option>
                          <option>Hospital / Healthcare Elevator</option>
                          <option>Goods Elevator</option>
                          <option>Maintenance / AMC</option>
                          <option>Modernization / Upgrade</option>
                          <option>Custom Elevator Solution</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                          ▼
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Building Type</label>
                      <div className="relative">
                        <select 
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 appearance-none focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                        >
                          <option value="">Select Building Type...</option>
                          <option>Residential Building</option>
                          <option>Commercial Complex</option>
                          <option>Hospital / Clinic</option>
                          <option>Factory / Warehouse</option>
                          <option>Other</option>
                        </select>
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conditional Field */}
                  {showCustomField && (
                    <div className="space-y-2 animate-fadeIn">
                       <label className="text-sm font-semibold text-gray-700">Specification Details</label>
                       <textarea rows="3" placeholder="Please describe dimensions, load capacity, or specific constraints..." className="w-full bg-blue-50 border border-blue-200 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message / Remarks</label>
                    <textarea rows="4" placeholder="How can we help you?" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"></textarea>
                  </div>

                  <button type="button" className="w-full bg-red-600 text-white py-4 rounded font-bold hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">
                    <Send size={18} />
                    Submit Request
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    Your data is secure. We usually respond within 24 hours.
                  </p>

                </form>
              </div>
            </Reveal>
          </div>

          {/* ================= RIGHT: INFO PANEL ================= */}
          <div className="space-y-8">

            {/* DARK CONTACT CARD */}
            <Reveal delay={0.3}>
              <div className="bg-gray-900 rounded-xl p-8 text-white shadow-xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <h3 className="text-xl font-bold mb-6 relative z-10">Headquarters</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg text-blue-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Office Address</p>
                      <p className="font-medium leading-relaxed">
                        123, Industrial Layout,<br />
                        Sirsi, Karnataka - 581401
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg text-blue-400">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Contact Number</p>
                      <p className="font-medium text-lg">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">+91 98765 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg text-blue-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email Inquiry</p>
                      <p className="font-medium">info@powerbirdelevators.com</p>
                      <p className="text-sm text-gray-500">support@powerbirdelevators.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg text-blue-400">
                       <Clock size={24} />
                    </div>
                    <div>
                       <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Operating Hours</p>
                       <p className="font-medium">Mon - Sat: 09:00 - 18:00</p>
                       <p className="text-sm text-gray-500">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* EMERGENCY CARD */}
            <Reveal delay={0.4}>
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-red-600 shrink-0" size={32} />
                  <div>
                    <h4 className="text-lg font-bold text-red-700">Emergency Breakdown?</h4>
                    <p className="text-sm text-red-600 mt-1 mb-3">
                      For trapped passengers or critical failures, call our 24/7 hotline immediately.
                    </p>
                    <a href="tel:+919876543210" className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-2 rounded hover:bg-red-700 transition">
                      Call Emergency Line
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

     {/* ================= MAP SECTION ================= */}
<section className="bg-gray-900 py-20">

  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <Reveal>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">
          Our Office Locations
        </h2>

        {/* MAP SWITCH BUTTONS */}
        <div className="inline-flex bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveMap('sirsi')}
            className={`px-5 py-2 text-sm font-semibold rounded-md transition ${
              activeMap === 'sirsi'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Sirsi Office
          </button>

          <button
            onClick={() => setActiveMap('bangalore')}
            className={`px-5 py-2 text-sm font-semibold rounded-md transition ${
              activeMap === 'bangalore'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Bengaluru Office
          </button>
        </div>
      </div>
    </Reveal>

    {/* MAP CONTAINER */}
    <div className="relative h-[420px] w-full rounded-xl overflow-hidden border border-gray-700 shadow-2xl">

      {/* SIRSI MAP */}
      {activeMap === 'sirsi' && (
        <iframe
          title="PowerBird Elevators – Sirsi"
          src="https://www.google.com/maps?q=PowerBird+Elevators+Sirsi&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
        />
      )}

      {/* BENGALURU MAP (TEMP PLACEHOLDER) */}
      {activeMap === 'bangalore' && (
        <iframe
          title="PowerBird Elevators – Bengaluru"
          src="https://www.google.com/maps?q=Mathikere+Bangalore&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
        />
      )}

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

      {/* INFO CARD */}
      <div className="absolute bottom-6 left-6 bg-white p-5 rounded-xl shadow-xl max-w-sm">
        {activeMap === 'sirsi' ? (
          <>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-1">
              Headquarters
            </p>
            <p className="text-sm font-semibold text-gray-900">
              PowerBird Elevators, Sirsi
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Serving Sirsi, Hubli, Dharwad & North Karnataka
            </p>
          </>
        ) : (
          <>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-1">
              Branch Office
            </p>
            <p className="text-sm font-semibold text-gray-900">
              Mathikere, HMT Layout, Bengaluru
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Serving Bengaluru & surrounding regions
            </p>
          </>
        )}
      </div>

    </div>

  </div>
</section>



    </div>
  )
}
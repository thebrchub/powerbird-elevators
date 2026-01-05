import { useState } from 'react'
import Reveal from '../components/Reveal'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  AlertCircle,
  MessageSquare,
  Moon,
  Sun
} from 'lucide-react'

// 🔥 STEP 1: Accept global props
export default function Contact({ darkPreview, setDarkPreview }) {
  const [requirementType, setRequirementType] = useState('')
  const [projectType, setProjectType] = useState('')
  const [activeMap, setActiveMap] = useState('sirsi')

  const showCustomField =
    requirementType === 'Custom Elevator Solution' ||
    projectType === 'Other'

  return (
    // 🔥 STEP 2: Main Wrapper with pt-18 & Theme Classes
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
            <h1 className="text-4xl font-bold">
              Contact <span className="text-blue-500">PowerBird Elevators</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={`mt-4 max-w-xl text-lg ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
              Reach out to our engineering team for consultations, quotations, 
              installations, or emergency maintenance support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className={`py-20 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* ================= LEFT: TECHNICAL FORM ================= */}
          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <div 
                className={`rounded-xl shadow-xl overflow-hidden border transition-colors duration-300
                ${darkPreview ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}
              >
                
                {/* Form Header */}
                <div 
                  className={`px-8 py-6 border-b flex justify-between items-center transition-colors duration-300
                  ${darkPreview ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}
                >
                  <div>
                    <h2 className={`text-xl font-bold flex items-center gap-2 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
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
                      <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className={`w-full border rounded px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500
                        ${darkPreview 
                          ? 'bg-gray-800 border-gray-700 text-white focus:bg-gray-900 placeholder-gray-500' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white'}`} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX" 
                        className={`w-full border rounded px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500
                        ${darkPreview 
                          ? 'bg-gray-800 border-gray-700 text-white focus:bg-gray-900 placeholder-gray-500' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white'}`} 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com" 
                      className={`w-full border rounded px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500
                      ${darkPreview 
                        ? 'bg-gray-800 border-gray-700 text-white focus:bg-gray-900 placeholder-gray-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white'}`} 
                    />
                  </div>

                  {/* Technical Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Requirement Type</label>
                      <div className="relative">
                        <select 
                          value={requirementType}
                          onChange={(e) => setRequirementType(e.target.value)}
                          className={`w-full border rounded px-4 py-3 appearance-none outline-none cursor-pointer focus:ring-2 focus:ring-blue-500
                          ${darkPreview 
                            ? 'bg-gray-800 border-gray-700 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'}`} 
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
                      <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Building Type</label>
                      <div className="relative">
                        <select 
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className={`w-full border rounded px-4 py-3 appearance-none outline-none cursor-pointer focus:ring-2 focus:ring-blue-500
                          ${darkPreview 
                            ? 'bg-gray-800 border-gray-700 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'}`} 
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
                       <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Specification Details</label>
                       <textarea 
                         rows="3" 
                         placeholder="Please describe dimensions, load capacity, or specific constraints..." 
                         className={`w-full border rounded px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500
                         ${darkPreview 
                           ? 'bg-blue-900/20 border-blue-800 text-white placeholder-blue-300/50' 
                           : 'bg-blue-50 border-blue-200 text-gray-900 placeholder-gray-500'}`}
                       ></textarea>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Message / Remarks</label>
                    <textarea 
                      rows="4" 
                      placeholder="How can we help you?" 
                      className={`w-full border rounded px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500
                      ${darkPreview 
                        ? 'bg-gray-800 border-gray-700 text-white focus:bg-gray-900 placeholder-gray-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:bg-white'}`} 
                    ></textarea>
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

            {/* DARK CONTACT CARD (Always Dark for contrast, or switchable if preferred) */}
            {/* I made this switchable to fit the theme nicely */}
            <Reveal delay={0.3}>
              <div 
                className={`rounded-xl p-8 shadow-xl relative overflow-hidden border transition-colors duration-300
                ${darkPreview ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <h3 className="text-xl font-bold mb-6 relative z-10">Headquarters</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg text-blue-400 ${darkPreview ? 'bg-gray-800' : 'bg-blue-50'}`}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Office Address</p>
                      <p className="font-medium leading-relaxed">
                        Near New KSRTC Bus Stand,<br />
                        Ganesh Nagar, Sirsi (U.K), Karnataka - 581401
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg text-blue-400 ${darkPreview ? 'bg-gray-800' : 'bg-blue-50'}`}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Contact Number</p>
                      <p className="font-medium text-lg">+91 9019666919</p>
                      <p className="text-sm text-gray-500">+91 87623 73939</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg text-blue-400 ${darkPreview ? 'bg-gray-800' : 'bg-blue-50'}`}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Inquiry</p>
                      <p className="font-medium">info@powerbirdelevators.com</p>
                      <p className="text-sm text-gray-500">support@powerbirdelevators.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg text-blue-400 ${darkPreview ? 'bg-gray-800' : 'bg-blue-50'}`}>
                       <Clock size={24} />
                    </div>
                    <div>
                       <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Operating Hours</p>
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
     <section className={`py-20 transition-colors duration-300 ${darkPreview ? 'bg-gray-900' : 'bg-white'}`}>

       <div className="max-w-7xl mx-auto px-6">

         {/* SECTION HEADER */}
         <Reveal>
           <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
             <h2 className={`text-2xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
               Our Office Locations
             </h2>

             {/* MAP SWITCH BUTTONS */}
             <div className={`inline-flex rounded-lg p-1 ${darkPreview ? 'bg-gray-800' : 'bg-gray-100'}`}>
               <button
                 onClick={() => setActiveMap('sirsi')}
                 className={`px-5 py-2 text-sm font-semibold rounded-md transition ${
                   activeMap === 'sirsi'
                     ? 'bg-blue-600 text-white'
                     : 'text-gray-500 hover:text-gray-900'
                 }`}
               >
                 Sirsi Office
               </button>

               <button
                 onClick={() => setActiveMap('bangalore')}
                 className={`px-5 py-2 text-sm font-semibold rounded-md transition ${
                   activeMap === 'bangalore'
                     ? 'bg-blue-600 text-white'
                     : 'text-gray-500 hover:text-gray-900'
                 }`}
               >
                 Bengaluru Office
               </button>
             </div>
           </div>
         </Reveal>

         {/* MAP CONTAINER */}
         <div className={`relative h-[420px] w-full rounded-xl overflow-hidden shadow-2xl border ${darkPreview ? 'border-gray-700' : 'border-gray-200'}`}>

           {/* SIRSI MAP */}
           {activeMap === 'sirsi' && (
             <iframe
               title="PowerBird Elevators – Sirsi"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.284244246846!2d74.8396656750373!3d14.618671685871276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe3bf54a55855f%3A0xc3f5c889f41031c3!2sPOWERBIRD%20ELEVATORS!5e0!3m2!1sen!2sin!4v1714800000000!5m2!1sen!2sin"
               className="absolute inset-0 w-full h-full border-0"
               loading="lazy"
               style={{ filter: darkPreview ? 'invert(90%) hue-rotate(180deg)' : 'none' }} // Simple Dark Mode Filter
             />
           )}

           {/* BENGALURU MAP */}
           {activeMap === 'bangalore' && (
             <iframe
               title="PowerBird Elevators – Bengaluru"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.271375960411!2d77.55160897500174!3d13.018388987301642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1b64a47551%3A0x7d6c6e755259929!2sMathikere%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714800000000!5m2!1sen!2sin"
               className="absolute inset-0 w-full h-full border-0"
               loading="lazy"
               style={{ filter: darkPreview ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
             />
           )}

           {/* GRADIENT OVERLAY (Optional for style) */}
           <div className={`absolute inset-0 pointer-events-none ${darkPreview ? 'bg-gradient-to-t from-black/40 via-transparent to-transparent' : 'hidden'}`} />

           {/* INFO CARD OVER MAP */}
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
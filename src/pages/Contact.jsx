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
  Sun,
  Zap,
  User,
  Building,
  FileText,
  PenTool
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
    <div className={`pt-18 min-h-screen transition-colors duration-300 ${darkPreview ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* ================= GLOBAL TOGGLE BUTTON (KEPT COMMENTED) ================= */}
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
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: CONTENT */}
            <Reveal>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Contact <span className="text-blue-500">PowerBird Elevators</span>
                </h1>
                
                {/* Quote with Blue Line */}
                <div className="mt-8 mb-6">
                  <p className={`text-xl font-bold border-l-4 border-blue-500 pl-4 leading-relaxed ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                    "We believe that great service is just as important as great engineering. We are here for you, 24/7."
                  </p>
                </div>
                
                <p className={`text-lg leading-relaxed ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
                  Whether you need a new installation quote, a modernization consultation, or immediate technical support, our engineering team is ready to assist you.
                </p>

                <div className={`mt-8 flex flex-col sm:flex-row gap-6 ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                   <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-500/10 text-blue-500">
                        <Clock size={20} />
                      </div>
                      <span className="text-sm font-medium">Response within 24 Hrs</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-500/10 text-green-500">
                        <MapPin size={20} />
                      </div>
                      <span className="text-sm font-medium">On-Site Consultation</span>
                   </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT: BLENDED IMAGE */}
            <Reveal delay={0.2}>
              <div className="relative w-full h-[300px] lg:h-[400px]">
                <img 
                  src="/lifts/3.webp" 
                  alt="Contact PowerBird Support" 
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

      {/* ================= MAIN CONTENT ================= */}
      <section className={`py-12 md:py-20 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ================= LEFT: REFINED TECHNICAL FORM ================= */}
          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <div 
                className={`rounded-xl shadow-2xl overflow-hidden border transition-colors duration-300
                ${darkPreview ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}
              >
                
                {/* Form Header */}
                <div 
                  className={`px-6 md:px-8 py-6 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-colors duration-300
                  ${darkPreview ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}
                >
                  <div>
                    <h2 className={`text-xl font-bold flex items-center gap-2 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                      <MessageSquare size={20} className="text-blue-600"/>
                      Project Inquiry
                    </h2>
                    {/* <p className="text-xs text-gray-500 font-mono mt-1">REF: WEB-INQUIRY-2026</p> */}
                  </div>
                  <div className="hidden sm:block">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-xs font-bold text-green-700 border border-green-200">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Support Online
                    </span>
                  </div>
                </div>

                {/* Form Body */}
                <form className="p-6 md:p-8 space-y-6">
                  
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Full Name <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <User size={18} />
                        </div>
                        <input 
                          type="text" 
                          required
                          placeholder="Ex: Rajesh Kumar" 
                          className={`w-full border rounded-lg pl-12 pr-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                          ${darkPreview 
                            ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-600' 
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white placeholder-gray-400'}`} 
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Phone Number <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <Phone size={18} />
                        </div>
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 99000 00000" 
                          className={`w-full border rounded-lg pl-12 pr-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                          ${darkPreview 
                            ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-600' 
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white placeholder-gray-400'}`} 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Email Address</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        placeholder="rajesh@company.com" 
                        className={`w-full border rounded-lg pl-12 pr-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                        ${darkPreview 
                          ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-600' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white placeholder-gray-400'}`} 
                      />
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Requirement Type */}
                    <div className="space-y-2">
                      <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Requirement Type</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <FileText size={18} />
                        </div>
                        <select 
                          value={requirementType}
                          onChange={(e) => setRequirementType(e.target.value)}
                          className={`w-full border rounded-lg pl-12 pr-10 py-3 appearance-none outline-none cursor-pointer focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                          ${darkPreview 
                            ? 'bg-gray-800/50 border-gray-700 text-white' 
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white'}`} 
                        >
                          <option value="" disabled>Select Requirement...</option>
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

                    {/* Building Type */}
                    <div className="space-y-2">
                      <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Building Type</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <Building size={18} />
                        </div>
                        <select 
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className={`w-full border rounded-lg pl-12 pr-10 py-3 appearance-none outline-none cursor-pointer focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                          ${darkPreview 
                            ? 'bg-gray-800/50 border-gray-700 text-white' 
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white'}`} 
                        >
                          <option value="" disabled>Select Building Type...</option>
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

                  {/* Conditional Field - Specifications */}
                  {showCustomField && (
                    <div className="space-y-2 animate-fadeIn">
                        <label className={`text-sm font-semibold flex items-center gap-2 ${darkPreview ? 'text-blue-400' : 'text-blue-700'}`}>
                          <PenTool size={14} /> Specification Details
                        </label>
                        <textarea 
                          rows="3" 
                          placeholder="Please describe dimensions, load capacity, or specific constraints..." 
                          className={`w-full border rounded-lg px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                          ${darkPreview 
                            ? 'bg-blue-900/10 border-blue-800 text-white placeholder-blue-300/30' 
                            : 'bg-blue-50 border-blue-200 text-gray-900 placeholder-blue-400'}`}
                        ></textarea>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-2">
                    <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Message / Remarks</label>
                    <div className="relative">
                      <textarea 
                        rows="4" 
                        placeholder="Tell us more about your project needs..." 
                        className={`w-full border rounded-lg px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                        ${darkPreview 
                          ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-600' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white placeholder-gray-400'}`} 
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="button" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-lg font-bold transition transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                  >
                    <Send size={18} />
                    Submit Request
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
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
                      <p className="font-medium break-all">info@powerbirdelevators.com</p>
                      <p className="text-sm text-gray-500 break-all">support@powerbirdelevators.com</p>
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
                 className={`px-4 md:px-5 py-2 text-sm font-semibold rounded-md transition ${
                   activeMap === 'sirsi'
                     ? 'bg-blue-600 text-white'
                     : 'text-gray-500 hover:text-gray-900'
                 }`}
               >
                 Sirsi Office
               </button>

               <button
                 onClick={() => setActiveMap('bangalore')}
                 className={`px-4 md:px-5 py-2 text-sm font-semibold rounded-md transition ${
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
         <div className={`relative h-[300px] md:h-[420px] w-full rounded-xl overflow-hidden shadow-2xl border ${darkPreview ? 'border-gray-700' : 'border-gray-200'}`}>

           {/* SIRSI MAP - REAL EMBED */}
           {activeMap === 'sirsi' && (
             <iframe
               title="PowerBird Elevators – Sirsi"
               src="https://maps.google.com/maps?q=Powerbird+Elevators+Sirsi&t=&z=15&ie=UTF8&iwloc=&output=embed"
               className="absolute inset-0 w-full h-full border-0"
               loading="lazy"
               style={{ filter: darkPreview ? 'invert(90%) hue-rotate(180deg)' : 'none' }} 
             />
           )}

           {/* BENGALURU MAP - REAL EMBED */}
           {activeMap === 'bangalore' && (
             <iframe
               title="PowerBird Elevators – Bengaluru"
               src="https://maps.google.com/maps?q=Mathikere+HMT+Layout+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
               className="absolute inset-0 w-full h-full border-0"
               loading="lazy"
               style={{ filter: darkPreview ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
             />
           )}

           {/* GRADIENT OVERLAY */}
           <div className={`absolute inset-0 pointer-events-none ${darkPreview ? 'bg-gradient-to-t from-black/40 via-transparent to-transparent' : 'hidden'}`} />

           {/* INFO CARD OVER MAP */}
           <div className="absolute bottom-6 left-6 bg-white p-5 rounded-xl shadow-xl max-w-sm hidden sm:block">
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
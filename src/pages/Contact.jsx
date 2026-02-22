import { useState } from 'react'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { sendMailPorterEmail } from '../utils/mailPorter'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  AlertCircle,
  MessageSquare,
  Zap,
  User,
  Building,
  FileText,
  PenTool,
  Loader2,
  CheckCircle2
} from 'lucide-react'

export default function Contact({ darkPreview, setDarkPreview }) {
  const [activeMap, setActiveMap] = useState('sirsi')
  const [activeOffice, setActiveOffice] = useState('sirsi') 
  const [status, setStatus] = useState('idle')

  // Consolidated Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirementType: '',
    projectType: '',
    specifications: '',
    message: ''
  })

  const showCustomField = 
    formData.requirementType === 'Custom Elevator Solution' || 
    formData.projectType === 'Other'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNumericInput = (e) => {
    const { name, value, maxLength } = e.target
    if (/^\d*$/.test(value) && value.length <= maxLength) {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number")
      return
    }
    setStatus('submitting')
    try {
      const messageRemarksParts = []
      if (formData.message) messageRemarksParts.push(`Message: ${formData.message}`)
      if (formData.specifications) messageRemarksParts.push(`Specifications: ${formData.specifications}`)

      await sendMailPorterEmail({
        name: formData.name,
        mobile: formData.phone,
        message: formData.message || formData.specifications || 'Project inquiry',
        services: 'Project Inquiry',
        brand: 'powerbird',
        full_name: formData.name,
        phone_number: formData.phone,
        email_address: formData.email,
        requirement_type: formData.requirementType || 'General Inquiry',
        building_type: formData.projectType || 'Not specified',
        message_remarks: messageRemarksParts.join(' | ')
      })
      setStatus('success')
    } catch (error) {
      console.error(error)
      alert('We could not send your request right now. Please try again in a moment.')
      setStatus('idle')
    }
  }

  const inputClasses = `w-full border rounded-lg px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
    ${darkPreview 
      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500' 
      : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white placeholder-gray-400'}`

  return (
    <div className={`pt-18 min-h-screen transition-colors duration-300 ${darkPreview ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

    <SEO 
      title="Contact Powerbird Elevators | Lift Quotes & 24/7 Support"
      description="Get in touch with Powerbird Elevators for new lift installations, modernization, or AMC quotes. Serving Uttara Kannada, Hubli, and Mangalore."
      keywords="contact powerbird elevators, lift quote sirsi, elevator amc inquiry, emergency lift repair karnataka"
      url="https://powerbirdelevators.in/contact"
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
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Contact <span className="text-blue-500">PowerBird Elevators</span>
                </h1>
                
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
                  src="/hero/5.webp" 
                  alt="Contact PowerBird Support" 
                  className="w-full h-full object-cover"
                />
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
                  </div>
                  <div className="hidden sm:block">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-xs font-bold text-green-700 border border-green-200">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Support Online
                    </span>
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-6 md:p-8">
                  {status === 'success' ? (
                    <div className="py-12 text-center animate-in fade-in zoom-in duration-300">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>Inquiry Received!</h3>
                      <p className={`mb-8 max-w-sm mx-auto ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                        Thank you, <strong>{formData.name}</strong>. Our engineering team will review your project details and contact you shortly.
                      </p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Personal Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Full Name <span className="text-blue-500">*</span></label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                              <User size={18} />
                            </div>
                            <input 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Ex: Rajesh Kumar" 
                              className={`${inputClasses} pl-12`} 
                              disabled={status === 'submitting'}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Phone Number <span className="text-blue-500">*</span></label>
                          <div className="flex rounded-lg shadow-sm">
                            <span className={`inline-flex items-center px-3 text-sm border border-r-0 rounded-l-lg font-medium select-none
                              ${darkPreview ? 'bg-gray-800 border-gray-700 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-500'}`}>
                              +91
                            </span>
                            <input 
                              type="text" 
                              name="phone"
                              inputMode="numeric"
                              value={formData.phone}
                              onChange={handleNumericInput}
                              maxLength={10}
                              required
                              placeholder="99000 00000" 
                              className={`${inputClasses} rounded-l-none border-l-0 pl-3`} 
                              disabled={status === 'submitting'}
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="rajesh@company.com" 
                            className={`${inputClasses} pl-12`} 
                            disabled={status === 'submitting'}
                          />
                        </div>
                      </div>

                      {/* Technical Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Requirement Type</label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                              <FileText size={18} />
                            </div>
                            <select 
                              name="requirementType"
                              value={formData.requirementType}
                              onChange={handleChange}
                              className={`${inputClasses} pl-12 cursor-pointer appearance-none`}
                              disabled={status === 'submitting'}
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
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Building Type</label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                              <Building size={18} />
                            </div>
                            <select 
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className={`${inputClasses} pl-12 cursor-pointer appearance-none`}
                              disabled={status === 'submitting'}
                            >
                              <option value="" disabled>Select Building Type...</option>
                              <option>Residential Building</option>
                              <option>Commercial Complex</option>
                              <option>Hospital / Clinic</option>
                              <option>Factory / Warehouse</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Conditional Field */}
                      {showCustomField && (
                        <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                            <label className={`text-sm font-semibold flex items-center gap-2 ${darkPreview ? 'text-blue-400' : 'text-blue-700'}`}>
                              <PenTool size={14} /> Specification Details
                            </label>
                            <textarea 
                              name="specifications"
                              value={formData.specifications}
                              onChange={handleChange}
                              rows="3" 
                              placeholder="Please describe dimensions, load capacity, or specific constraints..." 
                              className={`w-full border rounded-lg px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                              ${darkPreview 
                                ? 'bg-blue-900/10 border-blue-800 text-white placeholder-blue-300/30' 
                                : 'bg-blue-50 border-blue-200 text-gray-900 placeholder-blue-400'}`}
                              disabled={status === 'submitting'}
                            ></textarea>
                        </div>
                      )}

                      {/* Message */}
                      <div className="space-y-2">
                        <label className={`text-sm font-semibold ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Message / Remarks</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5" 
                          placeholder="Tell us more about your project needs..." 
                          className={inputClasses} 
                          disabled={status === 'submitting'}
                        ></textarea>
                      </div>

                      {/* Submit */}
                      <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-lg font-bold transition transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30
                        ${status === 'submitting' ? 'opacity-80 cursor-not-allowed' : ''}`}
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="animate-spin" size={18} />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Submit Request
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Your data is secure. We usually respond within 24 hours.
                      </p>

                    </form>
                  )}
                </div>

              </div>
            </Reveal>
          </div>

          {/* ================= RIGHT: INFO PANEL ================= */}
          <div className="space-y-8">

            {/* DARK CONTACT CARD WITH CENTERED TABS */}
            <Reveal delay={0.3}>
              <div 
                className={`rounded-xl p-8 shadow-xl relative overflow-hidden border transition-colors duration-300
                ${darkPreview ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
              >
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* 🔥 UPDATED: CENTERED TABS */}
                <div className="flex justify-center items-baseline gap-10 mb-8 relative z-10 border-b border-gray-200/10 pb-2">
                   <button
                     onClick={() => setActiveOffice('sirsi')}
                     className={`text-lg pb-2 transition-all duration-300 border-b-2 
                       ${activeOffice === 'sirsi' 
                         ? 'font-bold text-blue-500 border-blue-500' 
                         : 'font-medium text-gray-500 border-transparent hover:text-gray-400'
                       }`}
                   >
                     Headquarters
                   </button>
                   
                   <button
                     onClick={() => setActiveOffice('bangalore')}
                     className={`text-lg pb-2 transition-all duration-300 border-b-2 
                       ${activeOffice === 'bangalore' 
                         ? 'font-bold text-blue-500 border-blue-500' 
                         : 'font-medium text-gray-500 border-transparent hover:text-gray-400'
                       }`}
                   >
                     Branch Office
                   </button>
                </div>
                
                {/* CONTACT DETAILS */}
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg text-blue-400 ${darkPreview ? 'bg-gray-800' : 'bg-blue-50'}`}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Office Address</p>
                      
                      {/* ADDRESS SWAP ANIMATION */}
                      {activeOffice === 'sirsi' ? (
                        <p className="font-medium leading-relaxed animate-in fade-in duration-300">
                          Near New KSRTC Bus Stand,<br />
                          Ganesh Nagar, Sirsi (U.K), Karnataka - 581401
                        </p>
                      ) : (
                        <p className="font-medium leading-relaxed animate-in fade-in duration-300">
                          Gokula 1st Stage, 8th Cross,<br />
                          Opp. Comfort INN, HMT Layout,<br /> 
                          Mathikere, Bengaluru – 560054
                        </p>
                      )}
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
                      <p className="font-medium break-all">powerbirdelevators@gmail.com</p>
                      <p className="font-medium break-all">info@powerbirdelevators.in</p>                    
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

            {/* EMERGENCY CARD - Black Border, Darker Yellow BG, Dark Yellow Text */}
<Reveal delay={0.4}>
  <div className="bg-yellow-200 border border-black rounded-xl p-6 shadow-sm">
    <div className="flex items-start gap-4">
      {/* Icon - Black for high contrast warning */}
      <AlertCircle className="text-black shrink-0" size={32} />
      
      <div>
        {/* Title - Dark Yellow (Ochre) */}
        <h4 className="text-lg font-bold text-yellow-700">Emergency Breakdown?</h4>
        
        {/* Text - Black/Dark Gray */}
        <p className="text-sm text-gray-900 mt-1 mb-3 font-medium">
          For trapped passengers or critical failures, call our 24/7 hotline immediately.
        </p>
        
        {/* Button - Black Background, Yellow Text */}
        <a href="tel:+918762373939" className="inline-block bg-black text-yellow-400 text-sm font-bold px-4 py-2 rounded hover:bg-gray-800 transition shadow-md">
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
             <div className={`flex w-full sm:w-auto rounded-lg p-1 ${darkPreview ? 'bg-gray-800' : 'bg-gray-100'}`}>
               <button
                 onClick={() => setActiveMap('sirsi')}
                 className={`flex-1 sm:flex-none px-4 md:px-5 py-2 text-sm font-semibold rounded-md transition text-center whitespace-nowrap ${
                   activeMap === 'sirsi'
                     ? 'bg-blue-600 text-white'
                     : 'text-gray-500 hover:text-gray-900'
                 }`}
               >
                 Sirsi Office
               </button>

               <button
                 onClick={() => setActiveMap('bangalore')}
                 className={`flex-1 sm:flex-none px-4 md:px-5 py-2 text-sm font-semibold rounded-md transition text-center whitespace-nowrap ${
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

           {/* SIRSI MAP */}
           {activeMap === 'sirsi' && (
             <iframe
               title="PowerBird Elevators – Sirsi"
               src="https://maps.google.com/maps?q=Powerbird+Elevators+Sirsi&t=&z=15&ie=UTF8&iwloc=&output=embed"
               className="absolute inset-0 w-full h-full border-0"
               loading="lazy"
               style={{ filter: darkPreview ? 'invert(90%) hue-rotate(180deg)' : 'none' }} 
             />
           )}

           {/* BENGALURU MAP */}
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

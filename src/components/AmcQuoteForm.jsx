import { useState } from 'react'
import { Send, Loader2, CheckCircle2, Phone, User, MapPin, Building, Activity, Mail } from 'lucide-react'
import { sendMailPorterEmail } from '../utils/mailPorter'

export default function AmcQuoteForm() {
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success'

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    liftCount: '1 Lift',
    status: 'New AMC Requirement'
  })

  // Handle Text/Select Inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    const nextValue = name === 'email' ? value.replace(/\s/g, '') : value
    setFormData(prev => ({ ...prev, [name]: nextValue }))
  }

  // Handle Numeric Input (Phone)
  const handleNumericInput = (e) => {
    const { name, value, maxLength } = e.target
    if (/^\d*$/.test(value) && value.length <= maxLength) {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number")
      return
    }

    setStatus('submitting')

    // Simulate API call
    try {
      await sendMailPorterEmail({
        name: formData.name,
        mobile: formData.phone,
        message: `AMC request from ${formData.city || 'unknown location'}`,
        brand: 'powerbird',
        contact_name: formData.name,
        phone_number: formData.phone,
        email_address: formData.email,
        city_location: formData.city,
        no_of_lifts: formData.liftCount,
        current_status: formData.status
      })
      setStatus('success')
    } catch (error) {
      console.error(error)
      alert('We could not send your request right now. Please try again in a moment.')
      setStatus('idle')
    }
  }

  // Common Input Styles
  const inputBaseClasses = "w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 transition-all duration-200 ease-in-out focus:bg-white outline-none"
  const labelClasses = "block mb-1.5 text-sm font-medium text-gray-700"

  // 🟢 SUCCESS VIEW
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
        <p className="text-gray-500 mb-8 max-w-xs mx-auto leading-relaxed">
          Thanks, <strong>{formData.name}</strong>. Our maintenance team will review your building details and contact you shortly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-colors text-sm"
        >
          Request another quote
        </button>
      </div>
    )
  }

  // 🔵 FORM VIEW
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* Note Badge */}
      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg flex gap-3 items-start">
        <div className="mt-0.5 text-blue-600 shrink-0">
          <Activity size={18} />
        </div>
        <p className="text-sm text-blue-800 leading-snug">
          <strong>Note:</strong> We provide AMC services for all major elevator brands across Karnataka.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className={labelClasses}>Contact Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <User size={18} />
            </div>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name" 
              className={`${inputBaseClasses} pl-10`}
              required
              disabled={status === 'submitting'}
            />
          </div>
        </div>

        {/* Phone (Fixed Overlap Issue) */}
        <div>
          <label className={labelClasses}>Phone Number</label>
          <div className="flex rounded-lg shadow-sm">
            <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg font-medium select-none">
              +91
            </span>
            <input 
              type="text"
              name="phone"
              inputMode="numeric"
              value={formData.phone}
              onChange={handleNumericInput}
              maxLength={10}
              placeholder="98765 43210" 
              className={`${inputBaseClasses} rounded-l-none border-l-0 pl-3`}
              required
              disabled={status === 'submitting'}
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelClasses}>Email Address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <Mail size={18} />
          </div>
          <input 
            type="email"
            name="email"
            inputMode="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com" 
            className={`${inputBaseClasses} pl-10`}
            required
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* City */}
        <div>
          <label className={labelClasses}>City / Location</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <MapPin size={18} />
            </div>
            <input 
              type="text" 
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Hubli, Bangalore" 
              className={`${inputBaseClasses} pl-10`}
              required
              disabled={status === 'submitting'}
            />
          </div>
        </div>

        {/* No of Lifts */}
        <div>
          <label className={labelClasses}>No. of Lifts</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Building size={18} />
            </div>
            <select 
              name="liftCount"
              value={formData.liftCount}
              onChange={handleChange}
              className={`${inputBaseClasses} pl-10 cursor-pointer appearance-none`}
              disabled={status === 'submitting'}
            >
              <option>1 Lift</option>
              <option>2 - 5 Lifts</option>
              <option>5+ Lifts</option>
              <option>Commercial Complex</option>
            </select>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div>
        <label className={labelClasses}>Current Status</label>
        <select 
          name="status"
          value={formData.status}
          onChange={handleChange}
          className={`${inputBaseClasses} cursor-pointer`}
          disabled={status === 'submitting'}
        >
          <option>New AMC Requirement</option>
          <option>Renewing Existing AMC</option>
          <option>Lift Not Working (Breakdown)</option>
          <option>Modernization Enquiry</option>
        </select>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all duration-300 transform active:scale-[0.98]
          ${status === 'submitting' 
            ? 'bg-blue-400 cursor-not-allowed opacity-80 text-white' 
            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-xl'
          }`}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Send size={18} />
            <span>Get AMC Quote</span>
          </>
        )}
      </button>

      <p className="text-xs text-center text-gray-400 mt-4">
         Typically responds within 24 hours.
      </p>

    </form>
  )
}

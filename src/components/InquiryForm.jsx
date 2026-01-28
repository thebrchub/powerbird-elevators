import { useState } from 'react'
import { Send, Loader2, CheckCircle2, User, Phone, Mail, MapPin, Hash } from 'lucide-react'
import { sendMailPorterEmail } from '../utils/mailPorter'

export default function QuoteDownloadForm({ submitLabel = 'Download Quotation' }) {
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success'
  
  // Form State to control inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    pincode: ''
  })

  // Handle Text Inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle Numeric Inputs (Phone & Pincode) - BLOCKS non-numbers
  const handleNumericInput = (e) => {
    const { name, value, maxLength } = e.target
    // Only allow numbers
    if (/^\d*$/.test(value) && value.length <= maxLength) {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Strict Length Checks before submitting
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number")
      return
    }
    if (formData.pincode.length !== 6) {
      alert("Please enter a valid 6-digit pincode")
      return
    }

    setStatus('submitting')

    // Simulate API call
    try {
      const messageRemarksParts = []
      if (formData.state) messageRemarksParts.push(`State: ${formData.state}`)
      if (formData.pincode) messageRemarksParts.push(`Pincode: ${formData.pincode}`)

      await sendMailPorterEmail({
        name: formData.name,
        mobile: formData.phone,
        message: 'Quotation download request',
        brand: 'powerbird',
        full_name: formData.name,
        phone_number: formData.phone,
        email_address: formData.email,
        requirement_type: 'Quotation Download',
        building_type: 'Not specified',
        message_remarks: messageRemarksParts.join(' | ')
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
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-500 mb-8 max-w-xs mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. We have received your details and will get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-colors text-sm"
        >
          Send another request
        </button>
      </div>
    )
  }

  // 🔵 FORM VIEW
  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name & Phone */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <User size={18} />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`${inputBaseClasses} pl-10`}
              required
              disabled={status === 'submitting'}
            />
          </div>
        </div>

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
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className={`${inputBaseClasses} pl-10`}
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      {/* State & Pincode */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>State</label>
          <div className="relative">
             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
               <MapPin size={18} />
             </div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Karnataka"
              className={`${inputBaseClasses} pl-10`}
              required
              disabled={status === 'submitting'}
            />
          </div>
        </div>

        <div>
          <label className={labelClasses}>Pincode</label>
          <div className="relative">
             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
               <Hash size={18} />
             </div>
            <input
              type="text"
              name="pincode"
              inputMode="numeric"
              value={formData.pincode}
              onChange={handleNumericInput}
              maxLength={6}
              placeholder="560054"
              className={`${inputBaseClasses} pl-10`}
              required
              disabled={status === 'submitting'}
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all duration-300 transform active:scale-[0.98]
          ${status === 'submitting'
            ? 'bg-blue-400 cursor-not-allowed opacity-80' 
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
            <span>{submitLabel}</span>
          </>
        )}
      </button>

      <p className="text-xs text-center text-gray-400 mt-4">
        We usually respond within 24 hours.
      </p>
    </form>
  )
}

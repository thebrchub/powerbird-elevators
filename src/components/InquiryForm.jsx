import { Send } from 'lucide-react'

export default function QuoteDownloadForm({ submitLabel = 'Download Quotation' }) {
  return (
    <form className="space-y-6">

      {/* Name & Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="input"
            required
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="input"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-semibold text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          placeholder="name@company.com"
          className="input"
          required
        />
      </div>

      {/* State & Pincode */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-gray-700">
            State
          </label>
          <input
            type="text"
            placeholder="Karnataka"
            className="input"
            required
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700">
            Pincode
          </label>
          <input
            type="text"
            placeholder="560054"
            className="input"
            required
          />
        </div>
      </div>

      {/* CTA */}
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-4 rounded-md font-bold hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
      >
        <Send size={18} />
        {submitLabel}
      </button>

      <p className="text-xs text-center text-gray-500">
        We usually respond within 24 hours.
      </p>
    </form>
  )
}

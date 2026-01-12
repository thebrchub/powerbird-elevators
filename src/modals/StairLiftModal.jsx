import BaseModal from './BaseModal'
import { Accessibility, Home, BatteryCharging } from 'lucide-react'

export default function StairLiftModal({ isOpen, onClose, darkPreview }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[3/4] rounded-xl overflow-hidden">
          <img src="/lifts/6.webp" alt="Stair Lift" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Stair Lifts (Home Mobility)</h2>
          <p className={`mb-6 ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
            Regain independence in your own home. Our stair lifts are designed for the elderly and those with limited mobility, fitting seamlessly onto your existing staircase without structural changes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className={`p-4 rounded-xl ${darkPreview ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <BatteryCharging className="mb-2 text-green-500" />
                <h4 className="font-bold text-sm">Battery Operated</h4>
                <p className="text-xs opacity-70">Works even during power cuts.</p>
             </div>
             <div className={`p-4 rounded-xl ${darkPreview ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <Home className="mb-2 text-blue-500" />
                <h4 className="font-bold text-sm">Space Saving</h4>
                <p className="text-xs opacity-70">Foldable seat and footrest.</p>
             </div>
          </div>
        </div>
      </div>
    </BaseModal>
  )
}
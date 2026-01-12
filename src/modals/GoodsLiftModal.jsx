import BaseModal from './BaseModal'
import { HardHat, Weight, Truck } from 'lucide-react'

export default function GoodsLiftModal({ isOpen, onClose, darkPreview }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[3/4] rounded-xl overflow-hidden">
          <img src="/lifts/4.webp" alt="Goods Lift" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Heavy Duty Goods Lifts</h2>
          <p className={`mb-6 ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
            Built for factories, warehouses, and showrooms. Our goods lifts are engineered to withstand rough usage and heavy loads day in and day out.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 border rounded-xl text-center ${darkPreview ? 'border-gray-700' : 'border-gray-200'}`}>
              <Weight className="mx-auto mb-2 text-orange-500" />
              <h4 className="font-bold">High Capacity</h4>
              <p className="text-sm">Up to 5000 Kgs</p>
            </div>
            <div className={`p-4 border rounded-xl text-center ${darkPreview ? 'border-gray-700' : 'border-gray-200'}`}>
              <Truck className="mx-auto mb-2 text-orange-500" />
              <h4 className="font-bold">Wide Opening</h4>
              <p className="text-sm">For forklifts & pallets</p>
            </div>
          </div>
          
          <div className="mt-6 text-sm opacity-70">
            *Available in both Traction (Counterweight) and Hydraulic configurations.
          </div>
        </div>
      </div>
    </BaseModal>
  )
}
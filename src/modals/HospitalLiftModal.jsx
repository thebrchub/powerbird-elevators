import BaseModal from './BaseModal'
import { Stethoscope, ShieldCheck, Ruler } from 'lucide-react'

export default function HospitalLiftModal({ isOpen, onClose, darkPreview }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[3/4] rounded-xl overflow-hidden">
          <img src="/lifts/3.webp" alt="Hospital Lift" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Hospital & Stretcher Lifts</h2>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6 text-green-800">
            <strong>Key Feature:</strong> Jerk-free VVVF Drive technology to ensure patient safety during transport.
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Ruler className="text-blue-500" />
              <span><strong>Deep Car Depth:</strong> Optimized 2000mm+ depth to accommodate stretchers and medical staff.</span>
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-blue-500" />
              <span><strong>Hygiene Priority:</strong> Stainless Steel (SS 304) interiors that are easy to sanitize.</span>
            </li>
            <li className="flex items-center gap-3">
              <Stethoscope className="text-blue-500" />
              <span><strong>Priority Control:</strong> 'Attendant Operation' mode for emergency non-stop travel.</span>
            </li>
          </ul>
        </div>
      </div>
    </BaseModal>
  )
}
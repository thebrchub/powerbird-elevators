import BaseModal from './BaseModal'
import { Eye, LayoutTemplate, Sparkles } from 'lucide-react'

export default function CapsuleLiftModal({ isOpen, onClose, darkPreview }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[3/4] rounded-xl overflow-hidden">
          <img src="/lifts/2.webp" alt="Capsule Lift" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Panoramic Capsule Lifts</h2>
          <p className={darkPreview ? 'text-gray-300' : 'text-gray-600'}>
            Transform your building's facade with our stunning glass capsule lifts. Designed for malls, hotels, and luxury villas, they offer a smooth ride with a view.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg h-fit"><Eye /></div>
              <div>
                <h4 className="font-bold">360° Views</h4>
                <p className="text-sm opacity-80">Full glass panels (laminated safety glass) for unobstructed views.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg h-fit"><LayoutTemplate /></div>
              <div>
                <h4 className="font-bold">Custom Shapes</h4>
                <p className="text-sm opacity-80">Available in D-shape, round, square, or multisided polygonal designs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  )
}
import BaseModal from './BaseModal'
import { Utensils, Box, ArrowUp } from 'lucide-react'

export default function DumbwaiterModal({ isOpen, onClose, darkPreview }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[3/4] rounded-xl overflow-hidden">
          <img src="/lifts/5.webp" alt="Dumbwaiter" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Dumbwaiter Systems</h2>
          <p className={`mb-6 ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
            The perfect invisible helper for hotels, restaurants, libraries, and hospitals. Move food, files, or medical supplies effortlessly between floors.
          </p>

          <div className="space-y-3">
             <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Utensils className="text-blue-500" /> 
                <span className="font-medium">Food Grade SS-304 Cabins</span>
             </div>
             <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Box className="text-blue-500" /> 
                <span className="font-medium">Capacity: 50kg to 250kg</span>
             </div>
             <div className="flex items-center gap-3 p-3 border rounded-lg">
                <ArrowUp className="text-blue-500" /> 
                <span className="font-medium">Waist-height loading level</span>
             </div>
          </div>
        </div>
      </div>
    </BaseModal>
  )
}
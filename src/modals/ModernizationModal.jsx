import BaseModal from './BaseModal'
import { ArrowUpCircle, Gauge, Cpu, LayoutTemplate } from 'lucide-react'

export default function ModernizationModal({ isOpen, onClose, darkPreview }) {
  
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      <div className="space-y-8">
        
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Elevator Modernization</h2>
            <p className={`text-lg leading-relaxed ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
              Is your lift older than 15 years? Modernization gives it a new life. We retrofit aging systems with cutting-edge <strong>V3F Drives</strong>, microprocessor controllers, and modern aesthetics without changing the entire lift shaft.
            </p>
          </div>
          <div className="flex-1 w-full h-64 rounded-xl overflow-hidden">
            <img src="/core/7.webp" alt="Modernization Before After" className="w-full h-full object-cover" />
          </div>
        </div>

        <hr className={`border-t ${darkPreview ? 'border-gray-800' : 'border-gray-200'}`} />

        {/* Upgrade Benefits */}
        <div>
          <h3 className="text-xl font-bold mb-6">What We Upgrade</h3>
          <div className="grid md:grid-cols-4 gap-4">
            
            <div className={`p-5 rounded-xl border text-center ${darkPreview ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <Cpu className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Controller</h4>
              <p className="text-xs text-gray-500">From relay-logic to Microprocessor for smarter dispatching.</p>
            </div>

            <div className={`p-5 rounded-xl border text-center ${darkPreview ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <Gauge className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Drive System</h4>
              <p className="text-xs text-gray-500">Install V3F Drives for 40% energy saving and jerk-free stops.</p>
            </div>

            <div className={`p-5 rounded-xl border text-center ${darkPreview ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <LayoutTemplate className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Aesthetics</h4>
              <p className="text-xs text-gray-500">New SS Hairline cabins, false ceilings, and touch COPs.</p>
            </div>

            <div className={`p-5 rounded-xl border text-center ${darkPreview ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <ArrowUpCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Safety</h4>
              <p className="text-xs text-gray-500">Add ARD, Overload sensors, and Infra-red door curtains.</p>
            </div>

          </div>
        </div>

      </div>
    </BaseModal>
  )
}
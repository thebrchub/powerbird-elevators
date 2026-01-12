import BaseModal from './BaseModal'
import { CheckCircle2, Building, Ruler, HardHat } from 'lucide-react'

export default function InstallationModal({ isOpen, onClose, darkPreview }) {
  
  const steps = [
    { title: "Site Planning", desc: "Detailed shaft analysis and GAD (General Arrangement Drawing) preparation." },
    { title: "Material Delivery", desc: "Staged delivery of rails, motors, and cabin components to ensure safety." },
    { title: "Precision Installation", desc: "Laser-aligned rail fixing and motor mounting by certified technicians." },
    { title: "Testing & Handover", desc: "Load testing, safety gear calibration, and final government inspection." }
  ]

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        {/* Left: Visuals */}
        <div className="space-y-6">
          <div className={`aspect-video rounded-xl overflow-hidden border ${darkPreview ? 'border-gray-800' : 'border-gray-200'}`}>
            <img src="/core/5.webp" alt="Installation Process" className="w-full h-full object-cover" />
          </div>
          <div className={`p-6 rounded-xl border ${darkPreview ? 'bg-gray-800/50 border-gray-700' : 'bg-blue-50 border-blue-100'}`}>
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Building className="text-blue-500" /> Types of Projects
            </h4>
            <ul className={`space-y-2 text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>• High-rise Residential Towers</li>
              <li>• Commercial Offices & Malls</li>
              <li>• Hospitals & Public Infrastructure</li>
              <li>• Industrial Heavy-Duty Lifts</li>
            </ul>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Turnkey Installation</h2>
          <p className={`mb-8 ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
            From the first blueprint to the final ride, our installation process is governed by strict ISO safety protocols and local regulations. We don't just install lifts; we integrate them into your building's soul.
          </p>

          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-blue-500">Execution Roadmap</h3>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold ${darkPreview ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  {i + 1}
                </div>
                <div>
                  <h4 className={`font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>{step.title}</h4>
                  <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </BaseModal>
  )
}
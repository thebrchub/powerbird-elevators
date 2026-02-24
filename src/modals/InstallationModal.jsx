import BaseModal from './BaseModal'
import { CheckCircle2, Building, Ruler, HardHat, ShieldCheck } from 'lucide-react' // Added ShieldCheck

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
          {/* Image */}
          <div className={`aspect-video rounded-xl overflow-hidden border ${darkPreview ? 'border-gray-800' : 'border-gray-200'}`}>
            <img src="/core/5.webp" alt="Installation Process" className="w-full h-full object-cover" />
          </div>

          {/* Block 1: Types of Projects */}
          <div className={`p-6 rounded-xl border ${darkPreview ? 'bg-gray-800/50 border-gray-700' : 'bg-blue-50 border-blue-100'}`}>
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Building className="text-blue-500" size={20} /> Types of Projects
            </h4>
            <ul className={`space-y-2 text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> High-rise Residential Towers</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Commercial Offices & Malls</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Hospitals & Public Infrastructure</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Industrial Heavy-Duty Lifts</li>
            </ul>
          </div>

          {/* 🔥 NEW BLOCK: Standards & Precision (Fills the gap) */}
          <div className={`p-6 rounded-xl border ${darkPreview ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
             <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
               <Ruler className="text-orange-500" size={20} /> Precision Standards
             </h4>
             <p className={`text-sm leading-relaxed ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
               We strictly adhere to <strong>IS 14665</strong> and <strong>National Building Code (NBC)</strong> guidelines. Our installations use laser-guided alignment for zero-vibration rides.
             </p>
          </div>

        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Turnkey Installation</h2>
          <p className={`mb-8 ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
            From the first blueprint to the final ride, our installation process is governed by strict ISO safety protocols and local regulations. We don't just install lifts; we integrate them into your building's soul.
          </p>

          <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-blue-500 flex items-center gap-2">
            <HardHat size={20} /> Execution Roadmap
          </h3>
          
          <div className="space-y-8 relative">
            {/* 🔥 REMOVED THE GLOBAL VERTICAL LINE HERE */}

            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 relative">
                
                {/* Number Badge & Connecting Line Container */}
                <div className="relative flex flex-col items-center">
                  {/* Number Badge */}
                  <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm border-2 
                    ${darkPreview 
                      ? 'bg-gray-900 border-blue-900 text-blue-400' 
                      : 'bg-white border-blue-100 text-blue-600 shadow-sm'
                    }`}>
                    {i + 1}
                  </div>
                  
                  {/* 🔥 NEW FIX: INDIVIDUAL CONNECTING LINE (Hidden on the last step) */}
                  {i !== steps.length - 1 && (
                    <div className={`absolute top-8 bottom-[-2rem] w-0.5 ${darkPreview ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
                  )}
                </div>
                
                {/* Text Content */}
                <div className="pb-2"> {/* Added slight padding bottom for spacing */}
                  <h4 className={`font-bold text-base ${darkPreview ? 'text-white' : 'text-gray-900'}`}>{step.title}</h4>
                  <p className={`text-sm mt-1 ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </BaseModal>
  )
}
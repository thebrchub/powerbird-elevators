import BaseModal from './BaseModal'
import { ShieldCheck, Clock, PenTool, Zap } from 'lucide-react'

export default function MaintenanceModal({ isOpen, onClose, darkPreview }) {
  
  const features = [
    { icon: <Clock size={20} />, title: "24/7 Breakdown Support", desc: "Rapid response teams stationed across the city." },
    { icon: <ShieldCheck size={20} />, title: "Preventive Checks", desc: "Monthly rigorous inspection of 50+ safety points." },
    { icon: <PenTool size={20} />, title: "Genuine Spares", desc: "We stock original OEM parts to minimize downtime." },
    { icon: <Zap size={20} />, title: "Safety Audit", desc: "Annual safety gear and governor speed testing." },
  ]

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      <div className="grid md:grid-cols-5 gap-8">
        
        {/* Left: Content */}
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold mb-4">Maintenance & AMC</h2>
          <p className={`mb-8 text-lg ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
            Elevators are the lifeline of a building. Our <strong>Annual Maintenance Contracts (AMC)</strong> are designed to predict failures before they happen, ensuring 99.9% uptime for your residents.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div key={i} className={`p-4 rounded-xl border transition-all hover:scale-105 ${darkPreview ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
                <div className="text-blue-500 mb-3">{item.icon}</div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: AMC Types */}
        <div className="md:col-span-2 space-y-4">
           <div className={`p-6 rounded-xl border-l-4 border-l-blue-500 ${darkPreview ? 'bg-gray-800' : 'bg-gray-50'}`}>
             <h3 className="font-bold text-lg mb-2">Comprehensive AMC</h3>
             <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>Includes all spare parts replacement and labor. Best for complete peace of mind and zero fluctuating costs.</p>
           </div>
           
           <div className={`p-6 rounded-xl border-l-4 border-l-green-500 ${darkPreview ? 'bg-gray-800' : 'bg-gray-50'}`}>
             <h3 className="font-bold text-lg mb-2">Non-Comprehensive (Labor) AMC</h3>
             <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>Covers regular servicing and breakdown labor. Spare parts are charged separately as needed.</p>
           </div>

           <div className={`aspect-[4/3] rounded-xl overflow-hidden mt-4`}>
             <img src="/core/6.webp" alt="Maintenance Engineer" className="w-full h-full object-cover" />
           </div>
        </div>

      </div>
    </BaseModal>
  )
}
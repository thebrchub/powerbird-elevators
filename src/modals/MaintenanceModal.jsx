import BaseModal from './BaseModal'
import { ShieldCheck, Clock, PenTool, Zap, FileText } from 'lucide-react'

export default function MaintenanceModal({ isOpen, onClose, darkPreview }) {
  
  const features = [
    { icon: <Clock size={20} />, title: "24/7 Breakdown Support", desc: "Rapid response teams stationed across the city." },
    { icon: <ShieldCheck size={20} />, title: "Preventive Checks", desc: "Monthly rigorous inspection of 50+ safety points." },
    { icon: <PenTool size={20} />, title: "Genuine Spares", desc: "We stock original OEM parts to minimize downtime." },
    { icon: <Zap size={20} />, title: "Safety Audit", desc: "Annual safety gear and governor speed testing." },
  ]

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      {/* Added items-stretch to ensure both columns match height */}
      <div className="grid md:grid-cols-5 gap-8 items-stretch h-full">
        
        {/* Left: Content */}
        <div className="md:col-span-3 flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-4">Maintenance & AMC</h2>
          <p className={`mb-8 text-lg ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
            Elevators are the lifeline of a building. Our <strong>Annual Maintenance Contracts (AMC)</strong> are designed to predict failures before they happen, ensuring 99.9% uptime for your residents.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {features.map((item, i) => (
              <div key={i} className={`p-4 rounded-xl border transition-all hover:scale-105 ${darkPreview ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
                <div className="text-blue-500 mb-3">{item.icon}</div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Statutory Compliance Block (Pushed to bottom with mt-auto) */}
          <div className={`mt-auto p-5 rounded-xl border flex items-start gap-4 ${darkPreview ? 'bg-gray-900 border-gray-800' : 'bg-blue-50 border-blue-100'}`}>
             <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
               <FileText size={24} />
             </div>
             <div>
               <h4 className={`font-bold text-base mb-1 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>License Renewal Support</h4>
               <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                 We handle the annual <strong>Govt. License renewal</strong> and safety inspections, so you don't have to worry about legal compliance.
               </p>
             </div>
          </div>
        </div>

        {/* Right: AMC Types & Image */}
        {/* 🔥 UPDATED: Added 'flex flex-col h-full' so children can grow */}
        <div className="md:col-span-2 flex flex-col h-full space-y-4">
           <div className={`p-6 rounded-xl border-l-4 border-l-blue-500 ${darkPreview ? 'bg-gray-800' : 'bg-gray-50'}`}>
             <h3 className="font-bold text-lg mb-2">Comprehensive AMC</h3>
             <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>Includes all spare parts replacement and labor. Best for complete peace of mind and zero fluctuating costs.</p>
           </div>
           
           <div className={`p-6 rounded-xl border-l-4 border-l-green-500 ${darkPreview ? 'bg-gray-800' : 'bg-gray-50'}`}>
             <h3 className="font-bold text-lg mb-2">Non-Comprehensive (Labor) AMC</h3>
             <p className={`text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>Covers regular servicing and breakdown labor. Spare parts are charged separately as needed.</p>
           </div>

           {/* 🔥 UPDATED IMAGE CONTAINER: 
               1. Removed fixed aspect ratio (aspect-[4/3])
               2. Added 'flex-1' to make it grow to fill space.
               3. Used absolute positioning on the img to ensure it fills the container perfectly.
           */}
           <div className={`flex-1 relative rounded-xl overflow-hidden min-h-[200px]`}>
             <img src="/core/6.webp" alt="Maintenance Engineer" className="absolute inset-0 w-full h-full object-cover" />
           </div>
        </div>

      </div>
    </BaseModal>
  )
}
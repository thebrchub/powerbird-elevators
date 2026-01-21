import BaseModal from './BaseModal'
import { 
  Gauge,      // For Speed
  Weight,     // For Capacity
  CheckCircle2, // For spec items
  Zap,        // For Energy Efficiency
  ShieldCheck // For Safety
} from 'lucide-react'

export default function PassengerLiftModal({ isOpen, onClose, darkPreview }) {
  
  const liftSpecs = [
    { label: "Car Finish", value: "Powder Coated / SS 304 Hairline Finish" },
    { label: "COP / LOP", value: "Touch / Push Buttons / Biometric" },
    { label: "Flooring", value: "PVC / Granite / Marble" },
    { label: "Door Finish", value: "SS 304 Hairline / Glass / Designer" },
    { label: "Door Type", value: "Automatic Centre Opening / Telescopic" },
  ];

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} darkPreview={darkPreview}>
      
      {/* 🔥 FIX: Removed 'items-start'. 
          This allows the grid columns to 'stretch' to the full height of the content. 
      */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* ================= LEFT COL: IMAGE ================= */}
        {/* This outer div stretches to the full height of the modal content */}
        <div> 
           {/* This inner div sticks to the top of the tall parent column */}
           {/* Added 'top-6' for a bit of breathing room from the top edge */}
           <div className="md:sticky md:top-6">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
               <img 
                 src="/lifts/1.webp" 
                 alt="Passenger Elevator" 
                 className="w-full h-full object-cover"
               />
              </div>
           </div>
        </div>

        {/* ================= RIGHT COL: CONTENT ================= */}
        <div className="space-y-8">
          
          {/* HEADER */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Passenger Elevator</h2>
            <div className="flex flex-wrap gap-2">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                ${darkPreview ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                Gearless (MRL) Technology
              </div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                ${darkPreview ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                70% Energy Saving
              </div>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
              Our passenger lifts combine <strong>German drive technology</strong> with AI-based group control for smooth, jerk-free travel. Designed for residential and commercial towers, they feature <strong>Permanent Magnet (PM) Motors</strong> that reduce power consumption by ~70% compared to traditional geared systems.
            </p>
          </div>

          {/* KEY FEATURES (Speed & Capacity) */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border flex items-center gap-4 ${darkPreview ? 'bg-gray-800/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
              <div className={`p-3 rounded-full ${darkPreview ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <Gauge size={24} />
              </div>
              <div>
                <p className={`text-xs uppercase font-bold tracking-wider ${darkPreview ? 'text-gray-500' : 'text-gray-500'}`}>Speeds</p>
                <p className="text-lg font-bold">1.0 to 2.5 mps</p>
              </div>
            </div>

            <div className={`p-4 rounded-xl border flex items-center gap-4 ${darkPreview ? 'bg-gray-800/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
              <div className={`p-3 rounded-full ${darkPreview ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-600'}`}>
                <Weight size={24} />
              </div>
              <div>
                <p className={`text-xs uppercase font-bold tracking-wider ${darkPreview ? 'text-gray-500' : 'text-gray-500'}`}>Capacities</p>
                <p className="text-lg font-bold">340 to 2500 kgs</p>
              </div>
            </div>
          </div>

          {/* SMART FEATURES */}
          <div className="grid sm:grid-cols-2 gap-3">
             <div className={`flex items-center gap-3 p-3 rounded-lg border ${darkPreview ? 'border-gray-800 bg-gray-900/50' : 'border-gray-100 bg-gray-50'}`}>
                <Zap size={18} className="text-yellow-500" />
                <span className={`text-sm font-medium ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>Auto Fan/Light Cut-off</span>
             </div>
             <div className={`flex items-center gap-3 p-3 rounded-lg border ${darkPreview ? 'border-gray-800 bg-gray-900/50' : 'border-gray-100 bg-gray-50'}`}>
                <ShieldCheck size={18} className="text-green-500" />
                <span className={`text-sm font-medium ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>ARD (Auto Rescue Device)</span>
             </div>
          </div>

          {/* SPECIFICATIONS LIST */}
          <div>
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            <div className={`rounded-xl border overflow-hidden ${darkPreview ? 'border-gray-800' : 'border-gray-200'}`}>
              <ul className="divide-y dark:divide-gray-800">
                {liftSpecs.map((spec, index) => (
                  <li key={index} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-2
                    ${darkPreview 
                      ? index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/30' 
                      : index % 2 === 0 ? 'bg-white' : 'bg-gray-50' 
                     }
                  `}>
                    <span className={`flex items-center gap-2 font-medium shrink-0 ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>
                      <CheckCircle2 size={16} className="text-blue-500" />
                      {spec.label}
                    </span>
                    <span className={`text-sm sm:text-base sm:text-right ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                      {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </BaseModal>
  )
}
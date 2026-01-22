import Reveal from './Reveal'
import { ShieldCheck, Zap, Clock, Award, Users } from 'lucide-react'

export default function WhyUs() {
  
  const featuresSmall = [
    { icon: <ShieldCheck size={18} />, text: "ISO 9001:2015 Quality Standards" },
    { icon: <Zap size={18} />, text: "Integrated VVVF Drive Technology" },
    { icon: <Clock size={18} />, text: "SLA-Backed Project Delivery" },
    { icon: <Award size={18} />, text: "Govt. Authorized License Holder" },
  ]

  return (
    <section 
      className="py-24 my-8 mx-4 md:mx-8 rounded-[3rem] overflow-hidden shadow-xl relative z-10 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE - TEXT CONTENT */}
        <div>
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-blue-600"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Technical Advantage
                </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Leading Developers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Choose PowerBird</span>
            </h2>
            
            {/* 🔥 FIX: Replaced **markdown** with <span className="font-bold">HTML</span> */}
            <p className="text-lg leading-relaxed mb-8 text-gray-600">
              Our systems utilize <span className="font-bold text-gray-900">Variable Voltage Variable Frequency (VVVF)</span> closed-loop drive technology to ensure floor-leveling precision within ±5mm. We implement redundant mechanical safety protocols, including overspeed governors and buffer systems, strictly adhering to <span className="font-bold text-gray-900">IS 14665 standards</span> and the <span className="font-bold text-gray-900">Karnataka Lifts Act</span>.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {featuresSmall.map((item, i) => (
                <div 
                    key={i} 
                    className="flex items-center gap-3 p-4 rounded-xl border transition-colors border-gray-100 bg-gray-50 text-gray-700"
                >
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT SIDE - IMAGE WITH FLOATING BADGE */}
        <Reveal delay={0.3}>
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl relative z-10">
              <img 
                src="/core/3.webp" 
                alt="Quality Testing" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-8 -left-8 p-6 rounded-2xl border backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] z-20 bg-white/90 border-white/50 text-gray-900">
              <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-600 rounded-lg text-white">
                      <Users size={20} />
                  </div>
                  <p className="text-2xl font-bold">24/7</p>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Emergency<br/>Breakdown Unit
              </p>
            </div>

            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
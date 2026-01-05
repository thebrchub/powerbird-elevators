import Reveal from './Reveal'
import { ShieldCheck, Zap, Clock, PenTool, Award, Users, CheckCircle2 } from 'lucide-react'

export default function WhyUs({ darkPreview }) {
  
  const featuresSmall = [
    { icon: <ShieldCheck size={18} />, text: "ISO 9001:2015 Certified Safety" },
    { icon: <Zap size={18} />, text: "40% More Energy Efficient V3F Drives" },
    { icon: <Clock size={18} />, text: "Strict On-Time Project Delivery" },
    { icon: <Award size={18} />, text: "Govt. Authorized License Holder" },
  ]

  return (
    <section 
      /* 🔥 FIX: Updated styling to match 'About Us':
         1. 'mx-4 md:mx-8': Adds the offset from screen edges
         2. 'rounded-[3rem]': Matches the smooth, large corner radius
         3. 'overflow-hidden': Keeps content inside the curves
      */
      className={`py-24 my-8 mx-4 md:mx-8 rounded-[3rem] overflow-hidden shadow-xl transition-colors duration-300 relative z-10 ${
        darkPreview ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE - TEXT CONTENT */}
        <div>
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
                <span className={`h-px w-8 ${darkPreview ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
                <span className={`text-xs font-bold uppercase tracking-widest ${darkPreview ? 'text-blue-400' : 'text-blue-600'}`}>
                  Our Value Proposition
                </span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
              Why Leading Developers <br />
              <span className="text-blue-600">Choose PowerBird</span>
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
              We don't just sell elevators; we provide peace of mind. Our engineering-first approach combines cutting-edge German drive technology with local regulatory expertise to ensure your vertical transport is safe, silent, and compliant.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {featuresSmall.map((item, i) => (
                <div 
                    key={i} 
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-colors ${
                        darkPreview ? 'border-gray-800 bg-gray-950/50 text-gray-300' : 'border-gray-100 bg-gray-50 text-gray-700'
                    }`}
                >
                  <div className={`${darkPreview ? 'text-blue-400' : 'text-blue-600'}`}>
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
                src="/core/3.png" 
                alt="Quality Testing" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Image Overlay Gradient */}
              <div className={`absolute inset-0 ${darkPreview ? 'bg-black/20' : 'bg-black/10'}`}></div>
            </div>
            
            {/* Floating Badge (Top Left) */}
            <div className={`
              absolute -top-8 -left-8 p-6 rounded-2xl border backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] z-20
              ${darkPreview 
                ? 'bg-gray-900/90 border-white/10 text-white' 
                : 'bg-white/90 border-white/50 text-gray-900'
              }
            `}>
              <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-600 rounded-lg text-white">
                      <Users size={20} />
                  </div>
                  <p className="text-2xl font-bold">24/7</p>
              </div>
              <p className={`text-xs font-bold uppercase tracking-wider ${darkPreview? 'text-gray-400':'text-gray-600'}`}>
                  Emergency<br/>Support Team
              </p>
            </div>

            {/* Decorative Blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
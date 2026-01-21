import Reveal from './Reveal'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function AboutUs({ darkPreview }) {
  const navigate = useNavigate()
  
  return (
    <section 
      /* 🔥 FIX: Added 'shadow-xl' to match the depth of the Why Us section */
      className={`py-24 my-8 mx-4 md:mx-8 rounded-[3rem] overflow-hidden shadow-xl transition-colors duration-300 ${
        darkPreview ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE SIDE */}
        <Reveal>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img 
                src="/core/4.webp"  
                alt="Elevator Engineering" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className={`
              absolute -bottom-6 -right-6 p-8 rounded-xl border backdrop-blur-md shadow-xl
              ${darkPreview 
                ? 'bg-gray-950/90 border-gray-800 text-white' 
                : 'bg-white/90 border-gray-100 text-gray-900'
              }
            `}>
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm font-medium uppercase tracking-wider opacity-80">Years of<br/>Excellence</p>
            </div>
          </div>
        </Reveal>

        {/* TEXT SIDE */}
        <div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`h-px w-8 ${darkPreview ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
              <span className={`text-xs font-bold uppercase tracking-widest ${darkPreview ? 'text-blue-400' : 'text-blue-600'}`}>
                Who We Are
              </span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
              Engineering the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Vertical Transportation</span>
            </h2>
            
            <p className={`text-lg leading-relaxed mb-6 ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
              At PowerBird Elevators, we don't just install lifts; we engineer movement. 
              We are proud to be the <span className={`font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>First and Best Elevator Company in the entire North Canara (Uttar Kannada) region.</span>
            </p>

            <p className={`text-lg leading-relaxed mb-6 ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
               Authorized by the Government of Karnataka, we combine precision mechanical engineering with AI-integrated control systems to deliver vertical mobility solutions that define safety and reliability.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="space-y-4 mb-8">
              {[
                'Government Authorized License Holder',
                'Advanced German Drive Technology',
                '24/7 Rapid Response Maintenance Team'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                  <span className={`font-medium ${darkPreview ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <button 
                onClick={() => {
                  navigate('/about')
                  window.scrollTo(0, 0) // Ensures the new page starts at the top
                }}
                className={`
                group flex items-center gap-2 px-6 py-3 rounded-lg font-bold border transition-all
                ${darkPreview 
                    ? 'border-gray-600 hover:bg-white hover:text-black text-white' 
                    : 'border-gray-300 hover:bg-gray-900 hover:text-white text-gray-900'
                }
                `}
            >
                More About Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            </Reveal>
        </div>

      </div>
    </section>
  )
}
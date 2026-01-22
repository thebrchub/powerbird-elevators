import Reveal from './Reveal'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function AboutUs() {
  const navigate = useNavigate()
  
  return (
    <section 
      /* Added 'shadow-xl' to match the depth of other sections */
      className="py-24 my-8 mx-4 md:mx-8 rounded-[3rem] overflow-hidden shadow-xl bg-white transition-colors duration-300"
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
            <div className="absolute -bottom-6 -right-6 p-8 rounded-xl border backdrop-blur-md shadow-xl bg-white/90 border-gray-100 text-gray-900">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm font-medium uppercase tracking-wider opacity-80">Years of<br/>Excellence</p>
            </div>
          </div>
        </Reveal>

        {/* TEXT SIDE */}
        <div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Who We Are
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Engineering the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Vertical Transportation</span>
            </h2>
            
            {/* 🔥 UPDATED: More technical, less "slogan-y" */}
            <p className="text-lg leading-relaxed mb-6 text-gray-600">
              PowerBird Elevators stands as the <span className="font-bold text-gray-900">First and Best Government-Authorized Elevator Company in the North Canara (Uttar Kannada) region.</span>
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-600">
               We specialize in the design, installation, and commissioning of high-performance elevator systems. By integrating precision mechanical engineering with advanced micro-processor based control systems, we ensure structural integrity and operational reliability that meets rigorous safety standards.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="space-y-4 mb-8">
              {[
                'Government Authorized License Holder (Karnataka)',
                'Precision-Engineered German Drive Systems',
                '24/7 Rapid Response Technical Support'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                  <span className="font-medium text-gray-700">
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
                  window.scrollTo(0, 0)
                }}
                className="group flex items-center gap-2 px-6 py-3 rounded-lg font-bold border transition-all border-gray-300 hover:bg-gray-900 hover:text-white text-gray-900"
            >
                More About Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            </Reveal>
        </div>

      </div>
    </section>
  )
}
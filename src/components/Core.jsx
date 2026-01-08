import { useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { MousePointer2, Settings, TrendingUp, ArrowRight } from 'lucide-react'

export default function CoreCapabilities({ darkPreview }) {
  
  const navigate = useNavigate()

  const services = [
    { 
      id: '01',
      title: 'Installation', 
      desc: 'Turnkey installation for residential & commercial towers.', 
      img: '/core/5.webp', 
      icon: <MousePointer2 className="w-6 h-6" /> 
    },
    { 
      id: '02',
      title: 'Maintenance', 
      desc: 'Predictive AMC protocols to prevent breakdowns.', 
      img: '/core/6.webp', 
      icon: <Settings className="w-6 h-6" /> 
    },
    { 
      id: '03',
      title: 'Modernization', 
      desc: 'Retrofitting aging systems with modern drive technology.', 
      img: '/core/7.webp',
      icon: <TrendingUp className="w-6 h-6" /> 
    },
  ]

  return (
    <section className={`py-28 ${darkPreview ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-blue-600"></span>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Expertise</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                Core Capabilities
              </h2>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className={`max-w-md text-lg ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
              Engineering-led solutions designed to keep your vertical transportation safe, efficient, and modern.
            </p>
          </Reveal>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                onClick={() => navigate('/services')}
                /* 🔥 TWEAK 1: Outer Container
                   - Changed 'p-2' to 'p-1' (This makes the border thinner: 4px)
                   - Kept 'rounded-[2.5rem]'
                */
                className={`
                  group relative cursor-pointer p-1 rounded-[2.5rem] transition-all duration-500
                  ${darkPreview 
                    ? 'bg-gray-900 hover:bg-gray-800' 
                    : 'bg-white hover:bg-blue-50 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/10'
                  }
                `}
              >
                {/* 🔥 TWEAK 2: Inner Container
                   - Changed 'rounded-[2rem]' to 'rounded-[2.25rem]' 
                   - This ensures the inner curve is parallel to the outer curve with the new thinner gap.
                */ }
                <div className="relative h-[400px] w-full rounded-[2.25rem] overflow-hidden">
                  
                  {/* BACKGROUND IMAGE */}
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${darkPreview ? 'from-gray-950 via-gray-900/60 to-transparent' : 'from-gray-900 via-gray-900/40 to-transparent'}`} />

                  {/* CONTENT OVERLAY */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    
                    {/* Floating Number */}
                    <div className="absolute top-6 right-6 text-6xl font-black text-white/10 select-none group-hover:text-white/20 transition-colors">
                      {service.id}
                    </div>

                    {/* Icon Badge */}
                    <div className="mb-4 w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 line-clamp-2 group-hover:text-white transition-colors">
                      {service.desc}
                    </p>

                    {/* Arrow Link */}
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-400 group-hover:text-white transition-colors">
                      <span>View Details</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <Reveal delay={0.3}>
            <div className="flex justify-center">
                <button 
                    onClick={() => navigate('/services')}
                    className={`
                      group flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 transition-all duration-300
                      ${darkPreview 
                        ? 'border-gray-700 text-white hover:border-blue-500 hover:bg-blue-500' 
                        : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                      }
                    `}
                >
                    Explore All Services 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </Reveal>

      </div>
    </section>
  )
}
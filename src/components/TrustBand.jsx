import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

/**
 * Helper Component: animated counter
 */
const Counter = ({ from = 0, to, duration = 2 }) => {
  const nodeRef = useRef()

  useEffect(() => {
    const node = nodeRef.current
    
    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value)
      }
    })

    return () => controls.stop()
  }, [from, to, duration])

  return <span ref={nodeRef} />
}

export default function TrustBand({ darkPreview }) {
  return (
    <section className="relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top decorative blur */}
        <div className="absolute inset-x-0 -top-24 h-48 bg-indigo-500/20 blur-[100px] pointer-events-none opacity-50" />

        <div
          className={`
            relative -mt-16 overflow-hidden
            rounded-2xl border
            backdrop-blur-xl transition-all duration-300
            ${
              darkPreview
                ? 'bg-white/5 border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,1)] ring-1 ring-white/10'
                : 'bg-white/80 border-white/40 shadow-xl shadow-blue-900/5'
            }
          `}
        >
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

          <div className={`grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x ${darkPreview ? 'divide-white/10' : 'divide-gray-200/50'}`}>
            
            {/* 1. ISO */}
            <div className="group flex flex-col items-center justify-center p-6 transition-colors hover:bg-white/5">
              <div className="flex items-center space-x-2 mb-2">
                <svg className={`w-4 h-4 ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`}>
                  ISO Certified
                </p>
              </div>
              <p className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b ${darkPreview ? 'from-white to-gray-300' : 'from-gray-900 to-gray-600'}`}>
                9001:2015
              </p>
            </div>

            {/* 2. Experience (Animated) */}
            <div className="group flex flex-col items-center justify-center p-6 transition-colors hover:bg-white/5">
              <div className="flex items-center space-x-2 mb-2">
                 <svg className={`w-4 h-4 ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`}>
                  Experience
                </p>
              </div>
              <p className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b ${darkPreview ? 'from-white to-gray-300' : 'from-gray-900 to-gray-600'}`}>
                <Counter from={0} to={12} duration={2} />+ Years
              </p>
            </div>

            {/* 3. Projects (Animated) */}
            <div className="group flex flex-col items-center justify-center p-6 transition-colors hover:bg-white/5">
              <div className="flex items-center space-x-2 mb-2">
                <svg className={`w-4 h-4 ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`}>
                  Projects
                </p>
              </div>
              <p className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b ${darkPreview ? 'from-white to-gray-300' : 'from-gray-900 to-gray-600'}`}>
                <Counter from={0} to={100} duration={2.5} />+ Done
              </p>
            </div>

            {/* 4. Emergency */}
            {/* 4. Emergency */}
            <a 
              href="tel:+918762373939"
              className="group flex flex-col items-center justify-center p-6 relative overflow-hidden cursor-pointer"
            >
              {/* Hover BG - Yellow Tint */}
              <div className={`absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="flex items-center space-x-2 mb-2 relative z-10">
                <div className="relative flex h-2 w-2">
                  {/* Ping Animation - Yellow */}
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                  {/* Solid Dot - Yellow */}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </div>
                {/* Text Label - Darker Yellow for readability */}
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-600`}>
                  Emergency
                </p>
              </div>
              
              <p 
                className={`
                  text-xl md:text-2xl font-bold relative z-10 
                  /* Yellow Glow Shadow */
                  drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]
                  ${darkPreview ? 'text-white' : 'text-gray-800'}
                `}
              >
                24/7 Support
              </p>
            </a>
            {/* 5. Govt Authorized */}
            <div className="group flex flex-col items-center justify-center p-6 col-span-2 md:col-span-1 transition-colors hover:bg-white/5">
              <div className="flex items-center space-x-2 mb-2">
                 <svg className={`w-4 h-4 ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${darkPreview ? 'text-gray-400' : 'text-gray-500'}`}>
                  Authorized
                </p>
              </div>
              <p className={`text-base md:text-lg font-medium text-center leading-tight ${darkPreview ? 'text-white' : 'text-gray-800'}`}>
                Govt. of Karnataka
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
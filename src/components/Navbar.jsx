import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import BrandLogo from './BrandLogo'
import DownloadQuoteModal from './DownloadQuoteModal'

export default function Navbar({ showLogo }) {
  const [open, setOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  // State to disable layoutId after the intro finishes
  const [flightLanded, setFlightLanded] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  // --- FLIGHT LANDING LOGIC ---
  useEffect(() => {
    const timer = setTimeout(() => {
        setFlightLanded(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  // --- SMART SCROLL LOGIC ---
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY === 0) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        if (!open) setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY, open])

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header 
        // 🔥 FIX: Added 'overflow-visible' and increased padding 'py-8' slightly 
        // to prevent the shadow from being cut off at the bottom.
        className={`
          fixed top-0 left-0 w-full z-40 overflow-visible
          py-8 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

          {/* LOGO */}
          <div
            className="flex-shrink-0 flex items-center h-10 cursor-pointer relative z-50"
            onClick={handleLogoClick}
          >
            {showLogo && (
              <BrandLogo 
                size="sm" 
                disableAnimation={location.pathname !== '/' || flightLanded} 
              />
            )}
          </div>

          {/* DESKTOP NAV */}
          <nav 
            // 🔥 FIX: Changed 'shadow-xl' to 'shadow-lg' (Cleaner)
            // Changed 'shadow-black/5' to 'shadow-black/10' (More visible/premium)
            className={`
              hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              items-center gap-1 p-1.5 rounded-full z-40 transition-all duration-300
              bg-white/60 backdrop-blur-md border border-white/50 
              shadow-lg shadow-black/10 ring-1 ring-white/50
            `}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((item, index) => {
              const isActive = location.pathname === item.path
              const textColor = isActive 
                ? 'text-black font-bold' 
                : 'text-gray-800 font-medium hover:text-black'

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`relative px-5 py-2 text-sm transition-colors duration-200 z-10 ${textColor}`}
                >
                  {item.name}
                  {hoveredIndex === index && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 rounded-full -z-10 bg-white/60 shadow-sm border border-white/50"
                    />
                  )}
                  {isActive && !hoveredIndex && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full box-content border-2 border-white/20"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* RIGHT SIDE: CTA */}
          <div className="flex items-center gap-4 flex-shrink-0 z-50">
            <div className="hidden md:block">
              <button
                onClick={() => setQuoteOpen(true)}
                className="group relative px-6 py-2.5 rounded-full text-sm font-bold overflow-hidden transition-transform active:scale-95 shadow-lg bg-red-600 text-white hover:shadow-red-600/30"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Get a Quote <ChevronRight size={14} />
                </span>
              </button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-full transition backdrop-blur-md text-black bg-gray-100 border border-gray-300 hover:bg-gray-200"
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] border-l border-white/10 z-[70] shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
                <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Menu</span>
                <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-white/10 text-white transition"><X size={24} /></button>
              </div>
              <nav className="flex flex-col px-6 py-8 gap-2">
                {navLinks.map((item, i) => (
                  <Link key={item.name} to={item.path} onClick={() => setOpen(false)}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`group flex items-center justify-between p-4 rounded-xl transition-all ${
                        location.pathname === item.path ? 'bg-white text-black' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="text-lg font-medium">{item.name}</span>
                      <ChevronRight size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${location.pathname === item.path ? 'opacity-100' : ''}`} />
                    </motion.div>
                  </Link>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => { setOpen(false); setQuoteOpen(true) }}
                  className="mt-6 w-full bg-red-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg shadow-red-900/20 active:scale-95 transition-transform"
                >
                  Get a Quote
                </motion.button>
              </nav>
              <div className="mt-auto px-6 py-8 border-t border-white/5 text-center">
                 <p className="text-xs text-gray-600 uppercase tracking-wider">PowerBird Elevators © {new Date().getFullYear()}</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <DownloadQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  )
}
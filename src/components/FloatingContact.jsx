import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, MessageSquare, Plus } from 'lucide-react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', checkMobile)
    checkMobile()
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true)
  }

  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false)
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.2 } }
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4" // Increased gap slightly
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="flex flex-col gap-3 mb-2 items-end" // Ensure items align to end
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* --- PHONE BUTTON --- */}
            <motion.a
              href="tel:+919876543210" 
              variants={containerVariants}
              // 🔥 FIX 1: Equal padding (p-4) ensures a perfect circle. removed 'gap' from flex.
              className="flex items-center bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-colors group cursor-pointer relative overflow-hidden"
            >
              {/* Text Expands with Margin */}
              <span className="text-sm font-bold whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:mr-3 transition-all duration-300 ease-in-out">
                Call Us
              </span>
              
              {/* Icon Container - Perfectly Centered */}
              <div className="w-6 h-6 flex items-center justify-center relative z-10">
                <Phone size={22} fill="currentColor" />
              </div>
            </motion.a>

            {/* --- WHATSAPP BUTTON --- */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi%20PowerBird,%20I%20need%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              variants={containerVariants}
              // 🔥 FIX 2: Same padding fix here.
              className="flex items-center bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] transition-colors group cursor-pointer relative overflow-hidden"
            >
               <span className="text-sm font-bold whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:mr-3 transition-all duration-300 ease-in-out">
                WhatsApp
              </span>
              
              <div className="w-6 h-6 flex items-center justify-center relative z-10">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN TOGGLE BUTTON --- */}
      <button
        onClick={handleClick}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 z-50
          ${isOpen ? 'bg-gray-800 rotate-45' : 'bg-yellow-500 hover:scale-110'}
        `}
      >
        {isOpen ? (
           <X className="text-white" size={24} />
        ) : (
           <MessageSquare className="text-white" size={24} fill="currentColor" />
        )}
      </button>
    </div>
  )
}
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLayoutEffect, useState } from 'react' // CHANGE: Import useLayoutEffect

export default function ModalShell({ open, onClose, title, children }) {
  
  // We use useLayoutEffect so the padding is added BEFORE the screen updates.
  // This eliminates the visual "jump" completely.
  useLayoutEffect(() => {
    if (open) {
      // 1. Calculate the real width of the scrollbar
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      
      // 2. Add padding to body to fill the gap immediately
      document.body.style.paddingRight = `${scrollbarWidth}px`
      
      // 3. Lock the body
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open') 
    } else {
      // RESET
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }

    // Cleanup ensures we don't leave the style if component unmounts
    return () => { 
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}     // Starts transparent
          animate={{ opacity: 1 }}     // Fades into blur smoothly
          exit={{ opacity: 0 }}        // Fades out
          transition={{ duration: 0.2 }} // Fast but smooth transition
        >
          {/* BACKDROP with Blur */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* MODAL CONTENT */}
          <motion.div
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              <button 
                onClick={onClose}
                className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLayoutEffect } from 'react'

export default function ModalShell({ open, onClose, title, children, darkPreview }) {
  
  // ================= SCROLL LOCK LOGIC (UNTOUCHED) =================
  useLayoutEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open') 
    } else {
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
    return () => { 
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
  }, [open])

  // ================= 🔥 STYLING LOGIC =================

  // 1. Premium Custom Scrollbar Styles (Dynamic based on theme)
  const scrollbarStyles = `
    .premium-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .premium-scrollbar::-webkit-scrollbar-track {
      background: ${darkPreview ? '#111827' : '#f3f4f6'};
      border-radius: 8px;
    }
    .premium-scrollbar::-webkit-scrollbar-thumb {
      background-color: ${darkPreview ? '#374151' : '#d1d5db'};
      border-radius: 8px;
      border: 2px solid ${darkPreview ? '#111827' : '#f3f4f6'};
    }
    .premium-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: ${darkPreview ? '#4b5563' : '#9ca3af'};
    }
  `

  // 2. Global Input Styles (Fixes the "White Text on White Input" issue)
  // This forces all child inputs/textareas to adapt to the modal theme automatically.
  const darkFormStyles = "[&_input]:bg-gray-800 [&_input]:border-gray-700 [&_input]:text-white [&_input]:placeholder-gray-500 [&_textarea]:bg-gray-800 [&_textarea]:border-gray-700 [&_textarea]:text-white [&_textarea]:placeholder-gray-500 [&_select]:bg-gray-800 [&_select]:border-gray-700 [&_select]:text-white";
  
  const lightFormStyles = "[&_input]:bg-gray-50 [&_input]:border-gray-200 [&_input]:text-gray-900 [&_textarea]:bg-gray-50 [&_textarea]:border-gray-200 [&_textarea]:text-gray-900 [&_select]:bg-gray-50 [&_select]:border-gray-200 [&_select]:text-gray-900";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Inject Scrollbar Styles */}
          <style>{scrollbarStyles}</style>

          {/* BACKDROP - Darkened for Premium Feel */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* MODAL CONTENT */}
          <motion.div
            className={`relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border
              ${darkPreview 
                ? `bg-gray-950 border-white/10 text-white ${darkFormStyles}` 
                : `bg-white border-gray-100 text-gray-900 ${lightFormStyles}`
              }`}
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-6 py-4 border-b 
              ${darkPreview ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-gray-50/50'}`}>
              
              <h3 className={`text-lg font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h3>
              
              <button 
                onClick={onClose}
                className={`p-2 rounded-full cursor-pointer transition-colors
                  ${darkPreview 
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white' 
                    : 'bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600'
                  }`}
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className={`p-6 overflow-y-auto premium-scrollbar leading-relaxed 
              ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
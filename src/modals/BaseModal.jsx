import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// Variants remain the same
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } }
}

export default function BaseModal({ isOpen, onClose, children, darkPreview }) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent Body Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          
          {/* 🔥 WRAPPER DIV: 
              Reverted to 'max-w-4xl' to keep the original width.
          */}
          <motion.div
            className="relative w-full max-w-4xl" 
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* 🔥 CLOSE BUTTON:
              Mobile: Inside top-right (safe).
              Desktop (md): Floating outside to the right (-right-14).
            */}
            <button
              onClick={onClose}
              className={`
                absolute z-50 p-2 rounded-full shadow-lg transition-transform hover:scale-110
                top-3 right-3 
                md:top-0 md:-right-14
                ${darkPreview ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
              `}
            >
              <X size={24} />
            </button>

            {/* 🔥 CONTENT CARD */}
            <div className={`
              w-full rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto
              ${darkPreview ? 'bg-gray-900 text-white border border-gray-800' : 'bg-white text-gray-900'}
            `}>
              <div className="p-6 md:p-8">
                {children}
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
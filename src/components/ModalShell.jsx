import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ModalShell({ open, onClose, title, children }) {
  // ⛔ CRITICAL: this line prevents page rendering
  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* MODAL CONTAINER */}
        <div className="absolute inset-0 flex items-end md:items-center justify-center">
          <motion.div
            className="
              w-full md:max-w-xl
              bg-white
              rounded-t-2xl md:rounded-xl
              shadow-2xl
              max-h-[90vh]
              flex flex-col
            "
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b">
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                {title}
              </h3>
              <button onClick={onClose}>
                <X size={22} />
              </button>
            </div>

            {/* BODY (scrollable) */}
            <div className="px-4 md:px-6 py-5 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

import { X, ShieldCheck, FileText } from 'lucide-react'
import { useEffect } from 'react'

export default function LegalModal({ isOpen, onClose, title, content, darkPreview }) {
  
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  // 🔥 Custom CSS for dark scrollbar to keep it contained within this component
  const scrollbarStyles = `
    .premium-scrollbar::-webkit-scrollbar {
      width: 6px; /* Slimmer for modern look */
    }
    .premium-scrollbar::-webkit-scrollbar-track {
      background: ${darkPreview ? '#111827' : '#f3f4f6'}; /* gray-900 or gray-100 */
      border-radius: 8px;
    }
    .premium-scrollbar::-webkit-scrollbar-thumb {
      background-color: ${darkPreview ? '#374151' : '#d1d5db'}; /* gray-700 or gray-300 */
      border-radius: 8px;
      border: 2px solid ${darkPreview ? '#111827' : '#f3f4f6'}; /* Creates padding effect */
    }
    .premium-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: ${darkPreview ? '#4b5563' : '#9ca3af'}; /* gray-600 or gray-400 */
    }
  `

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-4 sm:px-6">
      
      {/* Inject styles */}
      <style>{scrollbarStyles}</style>

      {/* Backdrop - 🔥 Darkened even more (bg-black/90) */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal Content - 🔥 Premium Dark Styles */}
      <div 
        className={`relative w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col border overflow-hidden animate-scaleIn
        ${darkPreview 
          ? 'bg-gray-950 border-white/10 shadow-black/50' // Deeper bg, subtler border, stronger shadow
          : 'bg-white border-gray-100 shadow-xl'}`}
      >
        
        {/* Header - Cleaner, subtler border */}
        <div className={`flex items-center justify-between p-6 border-b ${darkPreview ? 'border-white/5' : 'border-gray-100'}`}>
          <div className="flex items-center gap-3">
            {/* Icon glow effect */}
            <div className={`p-2.5 rounded-xl ${darkPreview ? 'bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-blue-50 text-blue-600'}`}>
              {title === "Privacy Policy" ? <ShieldCheck size={22} /> : <FileText size={22} />}
            </div>
            <h3 className={`text-2xl font-bold tracking-tight ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${darkPreview ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500'}`}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body - 🔥 Added premium-scrollbar class & increased leading */}
        <div className={`p-6 overflow-y-auto premium-scrollbar leading-7 text-[15px] space-y-5 ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
          {content}
        </div>

        {/* Footer - Subtler border */}
        <div className={`p-4 sm:p-6 border-t flex justify-end bg-opacity-50 ${darkPreview ? 'border-white/5 bg-gray-950' : 'border-gray-100 bg-gray-50'}`}>
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold tracking-wide transition-all transform active:scale-[0.98] shadow-lg shadow-blue-600/20"
          >
            Acknowledge
          </button>
        </div>

      </div>
    </div>
  )
}
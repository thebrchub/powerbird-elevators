import { motion } from 'framer-motion'

export default function BrandLogo({ size = 'lg', disableAnimation = false }) {
  // Logic: lg = Big (Intro), sm = Small (Navbar)
  const sizeClasses = size === 'lg' ? 'h-14 md:h-16' : 'h-18 md:h-20'

  return (
    <motion.div
      // 🔥 FIX: Only apply layoutId animation if disableAnimation is FALSE.
      {...(!disableAnimation ? {
        layoutId: "powerbird-logo",
        transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } 
      } : {})}
      
      // 🔥 NEW: Add hover zoom effect
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      
      className="flex items-center z-50 cursor-pointer" // Added cursor-pointer for better UX
    >
      <img
        // 🔥 FIX: Removed dark check. Always use the standard logo.
        src="/logos/logo.svg"
        alt="PowerBird Elevators Logo"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-300`}
        draggable={false}
      />
    </motion.div>
  )
}
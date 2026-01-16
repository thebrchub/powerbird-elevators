import { motion } from 'framer-motion'

export default function BrandLogo({ size = 'lg', dark = false, disableAnimation = false }) {
  // Logic: lg = Big (Intro), sm = Small (Navbar)
  const sizeClasses = size === 'lg' ? 'h-14 md:h-16' : 'h-14 md:h-18'

  return (
    <motion.div
      // 🔥 FIX: Only apply layoutId animation if disableAnimation is FALSE.
      // This preserves the flight on Home, but kills it on other pages.
      {...(!disableAnimation ? {
        layoutId: "powerbird-logo",
        transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } 
      } : {})}
      className="flex items-center z-50"
    >
      <img
        src={dark ? "/logos/logo_w.png" : "/logos/logo.png"}
        alt="PowerBird Elevators Logo"
        className={`${sizeClasses} w-auto object-contain`}
        draggable={false}
      />
    </motion.div>
  )
}
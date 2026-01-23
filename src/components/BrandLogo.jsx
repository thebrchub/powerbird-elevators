import { motion } from 'framer-motion'

export default function BrandLogo({ size = 'lg', dark = false, disableAnimation = false }) {
  // Logic: lg = Big (Intro), sm = Small (Navbar)
  const sizeClasses = size === 'lg' ? 'h-14 md:h-16' : 'h-18 md:h-20'

  return (
    <motion.div
      // 🔥 FLIGHT ENGINE: This layoutId matches between Intro and Navbar.
      // We only disable it if explicitly told to.
      {...(!disableAnimation ? {
        layoutId: "powerbird-logo",
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
      } : {})}
      
      // 🔥 FIX: Removed whileHover and whileTap. 
      // This stops the zoom glitch but keeps it clickable.
      
      className="flex items-center z-50 cursor-pointer"
    >
      <img
        // Switches to White Logo if dark={true} (Lift), Black Logo otherwise (Navbar)
        src={dark ? "/logos/logo_w.png" : "/logos/logo.png"}
        alt="PowerBird Elevators Logo"
        // Removed 'transition-transform' to ensure total stability
        className={`${sizeClasses} w-auto object-contain`}
        draggable={false}
      />
    </motion.div>
  )
}
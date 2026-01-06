import { motion } from 'framer-motion'

export default function BrandLogo({ size = 'lg', dark = false }) {
  const sizeClasses = size === 'lg' ? 'h-14 md:h-16' : 'h-12 md:h-14'

  return (
    <motion.div
      layoutId="powerbird-logo"
      transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
      className="flex items-center"
    >
      <img
        // If dark=true (Dark Mode) -> Use White Logo
        // If dark=false (Light Mode) -> Use Standard Logo
        src={dark ? "/logos/logo_w.png" : "/logos/logo.png"}
        alt="PowerBird Elevators Logo"
        className={`${sizeClasses} w-auto object-contain`}
        draggable={false}
      />
    </motion.div>
  )
}
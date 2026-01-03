import { motion } from 'framer-motion'

export default function BrandLogo({ size = 'lg' }) {
  const sizeClasses =
    size === 'lg'
      ? 'h-14 md:h-16'
      : 'h-8 md:h-14'

  return (
    <motion.div
      layoutId="powerbird-logo"
      transition={{
        duration: 0.75,
        ease: [0.4, 0, 0.2, 1], // mechanical / material ease
      }}
      className="flex items-center"
    >
      <img
        src="/logos/logo.png"
        alt="PowerBird Elevators Logo"
        className={`${sizeClasses} w-auto object-contain`}
        draggable={false}
      />
    </motion.div>
  )
}

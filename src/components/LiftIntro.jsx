import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import BrandLogo from './BrandLogo'

// --- 🔥 TUNED "SWEET SPOT" CONFIGURATION ---
const FLOOR_MAX = 3
const DOOR_DELAY = 0.5      // Wait 0.5s to register floor number
const DOOR_DURATION = 1.1   // Smooth, heavy feel (Not too fast, not too slow)
const TOTAL_VISIBLE_TIME = 2000 // Total life: 2.0 seconds

export default function LiftIntro({ onFinish }) {
  // 🔥 FIX 1: Check Session Storage on initialization
  // If 'powerbird_intro_shown' exists, start as FALSE (invisible).
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('powerbird_intro_shown')
    }
    return true
  })

  const [floor, setFloor] = useState(3) // Start at Floor 3
  const [doorsOpened, setDoorsOpened] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  /* ================= DOOR OPEN LOGIC ================= */
  useEffect(() => {
    if (!visible) return

    const doorTimer = setTimeout(() => {
      setDoorsOpened(true)
    }, DOOR_DELAY * 1000)

    return () => clearTimeout(doorTimer)
  }, [visible])

  /* ================= EXIT SEQUENCE ================= */
  useEffect(() => {
    if (!visible) return

    const timer = setTimeout(() => {
      setVisible(false)
      // 🔥 FIX 2: Save to storage when animation finishes
      // This ensures it won't run again on refresh.
      sessionStorage.setItem('powerbird_intro_shown', 'true')
    }, TOTAL_VISIBLE_TIME)

    return () => clearTimeout(timer)
  }, [visible])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >

          {/* ================= ELEVATOR FRAME ================= */}
          <div className="relative w-full h-full max-w-4xl mx-auto border-x-8 border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden">

            {/* ================= HEADER PANEL ================= */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-800 to-zinc-900 z-40 flex items-center justify-center border-b-4 border-black shadow-lg">
              <div className="bg-black px-8 py-2 rounded-md border border-zinc-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                <p className="text-red-600 font-mono text-4xl font-bold tracking-widest drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]">
                  0{floor} <span className="text-xl align-top text-red-500">▲</span>
                </p>
              </div>
            </div>

            {/* ================= LEFT DOOR ================= */}
            <motion.div
              className="absolute left-0 top-24 bottom-0 w-1/2 z-30 border-r border-zinc-700 shadow-2xl"
              style={{ background: 'linear-gradient(90deg, #d4d4d8 0%, #a1a1aa 20%, #e4e4e7 45%, #a1a1aa 80%, #71717a 100%)' }}
              initial={{ x: 0 }}
              animate={{ x: doorsOpened ? '-100%' : 0 }} 
              transition={{
                duration: prefersReducedMotion ? 0.01 : DOOR_DURATION,
                ease: [0.4, 0, 0.2, 1], // "Bezier" easing for that mechanical feel
              }}
            >
              <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_3px)] mix-blend-overlay"></div>
            </motion.div>

            {/* ================= RIGHT DOOR ================= */}
            <motion.div
              className="absolute right-0 top-24 bottom-0 w-1/2 z-30 border-l border-zinc-700 shadow-2xl"
              style={{ background: 'linear-gradient(270deg, #d4d4d8 0%, #a1a1aa 20%, #e4e4e7 45%, #a1a1aa 80%, #71717a 100%)' }}
              initial={{ x: 0 }}
              animate={{ x: doorsOpened ? '100%' : 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : DOOR_DURATION,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_3px)] mix-blend-overlay"></div>
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent"></div>
            </motion.div>

            {/* ================= BRAND REVEAL ================= */}
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
               <BrandLogo size="2xl" />
            </motion.div>

            {/* ================= CALL BUTTON PANEL ================= */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-40 bg-gradient-to-b from-zinc-300 to-zinc-400 rounded-lg border border-zinc-500 flex-col items-center justify-evenly shadow-2xl z-30 hidden md:flex">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
              
              <div className="w-9 h-9 rounded-full border border-zinc-500 bg-zinc-200 shadow-inner flex items-center justify-center">
                 <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-zinc-400"></div>
              </div>

              <div className="w-9 h-9 rounded-full border border-zinc-500 bg-zinc-800 shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center animate-pulse">
                 <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-red-600 rotate-180"></div>
              </div>

              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
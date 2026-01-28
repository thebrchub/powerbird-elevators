import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import BrandLogo from './BrandLogo'

// --- CONFIGURATION ---
const FLOOR_MAX = 3
const DOOR_DELAY = 0.5      
const DOOR_DURATION = 1.1   
const TOTAL_VISIBLE_TIME = 2000 

export default function LiftIntro({ onFinish }) {
  // Helper to check storage once
  const checkVisited = () => {
    if (typeof window !== 'undefined') {
      return !!sessionStorage.getItem('powerbird_intro_shown')
    }
    return false
  }

  const isVisited = checkVisited()

  // 1. VISIBILITY STATE
  const [visible, setVisible] = useState(!isVisited)
  
  // 2. SAFETY REMOVAL STATE (The Fix)
  // If already visited, we can remove immediately. 
  // If NOT visited, we must wait for the animation to finish before removing.
  const [canRemove, setCanRemove] = useState(isVisited)

  const [floor, setFloor] = useState(3) 
  const [doorsOpened, setDoorsOpened] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useLayoutEffect(() => {
    if (!visible) return 
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [visible])

  useEffect(() => {
    if (!visible) return
    const doorTimer = setTimeout(() => {
      setDoorsOpened(true)
    }, DOOR_DELAY * 1000)
    return () => clearTimeout(doorTimer)
  }, [visible])

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('powerbird_intro_shown', 'true')
    }, TOTAL_VISIBLE_TIME)
    return () => clearTimeout(timer)
  }, [visible])

  // 🔥 FIX 1: If we are allowed to remove the component, return null immediately.
  // This prevents the "Black Curtain" from showing on refresh.
  if (canRemove) return null

  // 🔥 FIX 2: The Black Curtain. 
  // We only show this if the component is NOT ready to be removed yet (i.e., first load).
  if (!mounted) {
    return <div className="fixed inset-0 z-[99999] bg-black"></div>
  }

  if (typeof document === 'undefined') return null

  // 🔥 FIX 3: Removed "if (!visible) return null"
  // We let AnimatePresence handle the removal smoothly.

  return createPortal(
    <AnimatePresence 
      // 🔥 FIX 4: When the exit animation finishes, THEN we remove the component.
      onExitComplete={() => {
        setCanRemove(true)
        if (onFinish) onFinish()
      }}
    >
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }} // Smooth Fade Out
        >

          {/* Lift Shaft */}
          <div className="relative w-full h-full max-w-4xl mx-auto border-x-8 border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-800 to-zinc-900 z-40 flex items-center justify-center border-b-4 border-black shadow-lg">
              <div className="bg-black px-8 py-2 rounded-md border border-zinc-700 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                <p className="text-blue-600 font-mono text-4xl font-bold tracking-widest drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]">
                  0{floor} <span className="text-xl align-top text-blue-500">▲</span>
                </p>
              </div>
            </div>

            {/* Left Door */}
            <motion.div
              className="absolute left-0 top-24 bottom-0 w-1/2 z-30 border-r border-zinc-700 shadow-2xl"
              style={{ background: 'linear-gradient(90deg, #d4d4d8 0%, #a1a1aa 20%, #e4e4e7 45%, #a1a1aa 80%, #71717a 100%)' }}
              initial={{ x: 0 }}
              animate={{ x: doorsOpened ? '-100%' : 0 }} 
              transition={{
                duration: prefersReducedMotion ? 0.01 : DOOR_DURATION,
                ease: [0.4, 0, 0.2, 1], 
              }}
            >
              <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_3px)] mix-blend-overlay"></div>
            </motion.div>

            {/* Right Door */}
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

            {/* Brand Logo (Big) */}
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
               <BrandLogo size="2xl" dark={true} />
            </motion.div>

            {/* Call Button Panel */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-40 bg-gradient-to-b from-zinc-300 to-zinc-400 rounded-lg border border-zinc-500 flex-col items-center justify-evenly shadow-2xl z-30 hidden md:flex">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
              <div className="w-9 h-9 rounded-full border border-zinc-500 bg-zinc-200 shadow-inner flex items-center justify-center">
                 <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-zinc-400"></div>
              </div>
              <div className="w-9 h-9 rounded-full border border-zinc-500 bg-zinc-800 shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center animate-pulse">
                 <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-blue-600 rotate-180"></div>
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
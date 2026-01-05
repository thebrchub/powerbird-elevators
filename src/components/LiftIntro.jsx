import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom' // IMPORTED: Necessary for the fix
import BrandLogo from './BrandLogo'

const FLOOR_MAX = 3
const FLOOR_INTERVAL = 450
const DOOR_DELAY = 0.3
const DOOR_DURATION = 1.4
const TOTAL_VISIBLE_TIME = 2400

export default function LiftIntro({ onFinish }) {
  const [visible, setVisible] = useState(true)
  const [floor, setFloor] = useState(1)
  const [doorsOpened, setDoorsOpened] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  // Ensure code only runs on client-side to find document.body
  useEffect(() => {
    setMounted(true)
  }, [])

  /* ================= FLOOR COUNTER ================= */
  useEffect(() => {
    if (!visible) return

    if (prefersReducedMotion) {
      setFloor(FLOOR_MAX)
      return
    }

    const interval = setInterval(() => {
      setFloor((prev) => {
        if (prev >= FLOOR_MAX) {
          clearInterval(interval)
          return FLOOR_MAX
        }
        return prev + 1
      })
    }, FLOOR_INTERVAL)

    return () => clearInterval(interval)
  }, [visible, prefersReducedMotion])

  /* ================= DOOR OPEN MOMENT ================= */
  useEffect(() => {
    if (!visible) return

    const doorTimer = setTimeout(() => {
      setDoorsOpened(true)
    }, (DOOR_DELAY + DOOR_DURATION) * 1000)

    return () => clearTimeout(doorTimer)
  }, [visible])

  /* ================= EXIT SEQUENCE ================= */
  useEffect(() => {
    if (!visible) return

    const timer = setTimeout(() => {
      setVisible(false)
    }, TOTAL_VISIBLE_TIME)

    return () => clearTimeout(timer)
  }, [visible])

  // If not mounted yet, return null
  if (!mounted) return null

  // FIXED: Using createPortal to force this component to the very top of the DOM (body)
  // This ignores all parent styling/z-index issues.
  return createPortal(
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-gray-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >

          {/* ================= ELEVATOR FRAME ================= */}
          <div className="relative w-full h-full max-w-4xl mx-auto border-x-8 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">

            {/* ================= HEADER PANEL ================= */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gray-800 z-40 flex items-center justify-center border-b-4 border-gray-950 shadow-lg">
              <div className="bg-black px-6 py-2 rounded border border-gray-600 shadow-inner">
                <p className="text-red-500 font-mono text-3xl font-bold tracking-widest">
                  0{floor} <span className="text-sm align-top">▲</span>
                </p>
              </div>
            </div>

            {/* ================= LEFT DOOR ================= */}
            <motion.div
              className="absolute left-0 top-24 bottom-0 w-1/2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 border-r border-gray-500 z-30"
              initial={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : DOOR_DURATION,
                delay: prefersReducedMotion ? 0 : DOOR_DELAY,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.3)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.3)_75%,transparent_75%,transparent)] bg-[length:6px_6px]" />
            </motion.div>

            {/* ================= RIGHT DOOR ================= */}
            <motion.div
              className="absolute right-0 top-24 bottom-0 w-1/2 bg-gradient-to-l from-gray-300 via-gray-200 to-gray-400 border-l border-gray-600 z-30"
              initial={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : DOOR_DURATION,
                delay: prefersReducedMotion ? 0 : DOOR_DELAY,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.3)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.3)_75%,transparent_75%,transparent)] bg-[length:6px_6px]" />
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/30 to-transparent" />
            </motion.div>

            {/* ================= BRAND (BEHIND DOORS) ================= */}
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
              {doorsOpened ? (
                <BrandLogo size="lg" />
              ) : (
                <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-lg border border-gray-600 shadow-2xl text-center translate-y-12">
                  <h1 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">
                    PowerBird
                  </h1>
                  <div className="h-px w-full bg-gray-500 my-2" />
                  <p className="text-xs text-gray-400 uppercase">
                    Going Up
                  </p>
                </div>
              )}
            </motion.div>

            {/* ================= CALL BUTTON PANEL ================= */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-32 bg-gray-300 rounded border border-gray-400 flex-col items-center justify-evenly shadow-xl z-20 hidden md:flex">
              <div className="w-6 h-6 rounded-full border border-gray-500 bg-gray-200 shadow-inner" />
              <div className="w-6 h-6 rounded-full border border-gray-500 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] animate-pulse" />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body // This renders the component directly into the body tag
  )
}
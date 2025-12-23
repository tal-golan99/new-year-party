'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import Countdown from './Countdown'

export default function Hero() {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const [viewportHeight, setViewportHeight] = useState('100vh')

  useEffect(() => {
    // Use dynamic viewport height for mobile browsers
    const setHeight = () => {
      // Use the smallest possible height to prevent jumping
      const vh = window.innerHeight
      setViewportHeight(`${vh}px`)
      // Set CSS custom property for consistent use
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`)
    }
    
    setHeight()
    
    // Debounce resize events to prevent excessive recalculation
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(setHeight, 150)
    }
    
    window.addEventListener('resize', handleResize, { passive: true })
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
    layoutEffect: false
  })

  // Smoother parallax with less aggressive movement
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0])

  const ticketUrl = 'https://get-in.com/en/412012?seller_code=getin'

  return (
    <section 
      ref={ref} 
      className="relative flex items-center justify-center overflow-hidden"
      style={{ 
        minHeight: viewportHeight,
        height: 'auto',
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-animated-gradient hw-accelerate" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-deep-purple/40 via-midnight/60 to-midnight hw-accelerate" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!prefersReducedMotion && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#fbbf24' : '#8b5cf6',
              boxShadow: i % 3 === 0 
                ? '0 0 10px #fbbf24, 0 0 20px #fbbf24' 
                : '0 0 10px #8b5cf6, 0 0 20px #8b5cf6',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ 
          y: prefersReducedMotion ? 0 : y, 
          opacity: prefersReducedMotion ? 1 : opacity,
          willChange: 'transform, opacity'
        }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto hw-accelerate"
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 sm:mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-xs sm:text-sm text-gray-300 tracking-wider">DECEMBER 31ST, 2025</span>
          <Sparkles className="w-4 h-4 text-gold" />
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight mb-2">
            <span className="block text-white text-glow">NEW YEARS</span>
            <span className="block gradient-text text-glow-gold">EVE</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-electric-purple font-medium tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-4"
          >
            STUDENT PARTY
          </motion.p>
        </motion.div>

        {/* Year display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 sm:mt-8 mb-8 sm:mb-12"
        >
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-gold via-champagne to-gold animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
            2025
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <Countdown />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent" />
    </section>
  )
}


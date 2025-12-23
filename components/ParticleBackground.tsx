'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function ParticleBackground() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 5 }}>
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full hw-accelerate"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`,
            background: i % 3 === 0 ? '#fbbf24' : '#8b5cf6',
            boxShadow: i % 3 === 0 
              ? '0 0 10px #fbbf24, 0 0 20px #fbbf24' 
              : '0 0 10px #8b5cf6, 0 0 20px #8b5cf6',
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -30, 0],
            x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
            opacity: [0, 0.3, 1, 0.3, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}


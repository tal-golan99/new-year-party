'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-12-31T21:00:00')
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
        {['DAYS', 'HRS', 'MIN', 'SEC'].map((label) => (
          <div key={label} className="text-center">
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]">
              <span className="text-2xl sm:text-3xl md:text-5xl font-bold gradient-text font-display">
                --
              </span>
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-2 block tracking-widest">
              {label}
            </span>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HRS', value: timeLeft.hours },
    { label: 'MIN', value: timeLeft.minutes },
    { label: 'SEC', value: timeLeft.seconds },
  ]

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
          className="text-center"
        >
          <motion.div 
            className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-w-[60px] sm:min-w-[80px] md:min-w-[100px] relative overflow-hidden group hw-accelerate"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{ willChange: 'transform' }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: 1 }} />
            
            <motion.span 
              key={unit.value}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold gradient-text font-display relative z-10"
              style={{ willChange: 'opacity, transform' }}
            >
              {String(unit.value).padStart(2, '0')}
            </motion.span>
          </motion.div>
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-2 block tracking-widest">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}


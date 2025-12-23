'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, MapPin, Calendar } from 'lucide-react'

export default function Info() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const ticketUrl = 'https://get-in.com/en/412012?seller_code=getin'

  const infoItems = [
    {
      icon: Calendar,
      label: 'DATE',
      value: 'December 31st, 2025',
      color: 'text-electric-purple',
    },
    {
      icon: Clock,
      label: 'TIME',
      value: '21:00',
      color: 'text-gold',
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'TCHERNICHOVSKY 10',
      color: 'text-neon-purple',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-purple/20 to-midnight hw-accelerate" style={{ zIndex: 0 }} />
      
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-purple/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 hw-accelerate" style={{ zIndex: 1 }} />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 hw-accelerate" style={{ zIndex: 1 }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            EVENT <span className="gradient-text">DETAILS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-purple to-gold mx-auto rounded-full" />
        </motion.div>

        {/* Info cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {infoItems.map((item, index) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center h-full relative overflow-hidden hw-accelerate"
                style={{ willChange: 'transform' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ zIndex: 1 }} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-deep-purple to-midnight mb-4 sm:mb-6 ${item.color} relative z-10`}
                  style={{ willChange: 'transform' }}
                >
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </motion.div>

                {/* Label */}
                <p className="text-sm sm:text-sm text-gray-400 tracking-[0.2em] mb-2 relative z-10">
                  {item.label}
                </p>

                {/* Value */}
                <p className={`font-display font-bold text-xl sm:text-xl md:text-2xl relative z-10 ${index === 1 ? 'gradient-text' : 'text-white'}`}>
                  {item.value}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-electric-purple via-neon-purple to-royal-purple text-white font-bold text-base sm:text-lg rounded-full animate-pulse-glow transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">GET YOUR TICKETS NOW</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}


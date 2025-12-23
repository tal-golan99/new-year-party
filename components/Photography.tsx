'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera } from 'lucide-react'

export default function Photography() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px', amount: 0.2 })

  return (
    <section ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-purple/5 to-midnight hw-accelerate" style={{ zIndex: 0 }} />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[120px] hw-accelerate" style={{ zIndex: 1 }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gold text-sm sm:text-base tracking-[0.3em] mb-4"
          >
            CAPTURING THE MOMENTS
          </motion.p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            <span className="gradient-text">PHOTOGRAPHY</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Photographer card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <motion.div
            whileHover={{ 
              scale: 1.03,
              rotateY: 5,
              z: 50,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative glass rounded-3xl p-6 sm:p-8 overflow-hidden h-full group hw-accelerate"
            style={{ willChange: 'transform' }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold via-champagne to-soft-gold opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ zIndex: 1 }} />
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-champagne to-soft-gold" style={{ zIndex: 2 }} />

            {/* Camera Icon container */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold via-champagne to-soft-gold p-[2px] relative z-10"
              style={{ willChange: 'transform' }}
            >
              <div className="w-full h-full rounded-2xl bg-midnight flex items-center justify-center hw-accelerate">
                <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
            </motion.div>

            {/* Photographer info */}
            <div className="text-center relative z-20">
              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl mb-3 bg-gradient-to-r from-gold via-champagne to-soft-gold bg-clip-text text-transparent">
                TAL GOLAN
              </h3>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ zIndex: 1 }} />
            
            {/* Animated dot */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold"
            />
          </motion.div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
          <Camera className="w-5 h-5 text-gold/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
        </motion.div>
      </div>
    </section>
  )
}


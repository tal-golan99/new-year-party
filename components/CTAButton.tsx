'use client'

import { motion } from 'framer-motion'

export default function CTAButton() {
  const ticketUrl = 'https://get-in.com/en/412012?seller_code=getin'

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-midnight" style={{ zIndex: 0 }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-gold via-soft-gold to-gold text-midnight font-bold text-base sm:text-lg rounded-full animate-pulse-glow-gold hw-accelerate"
            whileTap={{ scale: 0.95 }}
            style={{ 
              willChange: 'transform',
              touchAction: 'manipulation'
            }}
          >
            <span className="relative z-10 tracking-wider">GET TICKETS</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="relative z-10"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}


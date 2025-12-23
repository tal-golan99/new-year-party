'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  const ticketUrl = 'https://get-in.com/en/412012?seller_code=getin'

  return (
    <footer className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/30 via-midnight to-midnight hw-accelerate" style={{ zIndex: 0 }} />
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-purple/30 to-transparent" style={{ zIndex: 1 }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            DON&apos;T MISS OUT
          </h3>
          <p className="text-gray-400 mb-8 text-sm sm:text-base max-w-md mx-auto">
            Join us for the most epic New Year&apos;s Eve celebration. Limited tickets available.
          </p>
          
          <motion.a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-electric-purple via-neon-purple to-royal-purple text-white font-bold text-base sm:text-lg rounded-full animate-pulse-glow hw-accelerate"
            whileTap={{ scale: 0.95 }}
            style={{ 
              willChange: 'transform',
              touchAction: 'manipulation'
            }}
          >
            <span className="relative z-10">GET YOUR TICKETS NOW</span>
          </motion.a>
        </motion.div>

        {/* Divider with sparkle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold/30" />
          <Sparkles className="w-5 h-5 text-gold/50" />
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            December 31st, 2025 • TCHERNICHOVSKY 10 • Doors Open 21:00
          </p>
          
          <p className="text-gray-600 text-xs">
            © 2025 New Years Eve Student Party. See you there!
          </p>
        </motion.div>
      </div>

      {/* Decorative bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-electric-purple/10 rounded-full blur-[100px] hw-accelerate" style={{ zIndex: 1 }} />
    </footer>
  )
}


'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Music, Disc3 } from 'lucide-react'

interface Artist {
  name: string
  genre?: string
  icon: typeof Music | typeof Disc3
  gradient: string
  delay: number
}

export default function Lineup() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const artists: Artist[] = [
    {
      name: 'DJ THOMAS',
      genre: 'Reggaetón | Cumbia',
      icon: Disc3,
      gradient: 'from-electric-purple via-neon-purple to-royal-purple',
      delay: 0,
    },
    {
      name: 'DJ TOMER',
      genre: 'Mainstream',
      icon: Music,
      gradient: 'from-gold via-champagne to-soft-gold',
      delay: 0.15,
    },
    {
      name: 'DJ FRENCHY',
      genre: 'Trance',
      icon: Disc3,
      gradient: 'from-neon-purple via-electric-purple to-royal-purple',
      delay: 0.3,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-purple/10 to-midnight" />
      
      {/* Animated background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-electric-purple/20 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[150px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-electric-purple text-sm sm:text-base tracking-[0.3em] mb-4"
          >
            FEATURING
          </motion.p>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            THE <span className="gradient-text">LINEUP</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-electric-purple to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Artists grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              variants={cardVariants}
              className="group perspective-1000"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  z: 50,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative glass rounded-3xl p-6 sm:p-8 overflow-hidden h-full"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${artist.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${artist.gradient}`} />

                {/* Icon container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${artist.gradient} p-[2px]`}
                >
                  <div className="w-full h-full rounded-2xl bg-midnight flex items-center justify-center">
                    <artist.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                </motion.div>

                {/* Artist info */}
                <div className="text-center relative z-10">
                  <h3 className={`font-display font-bold text-xl sm:text-2xl md:text-3xl mb-3 bg-gradient-to-r ${artist.gradient} bg-clip-text text-transparent`}>
                    {artist.name}
                  </h3>
                  {artist.genre && (
                    <p className="text-gray-400 text-sm sm:text-base">
                      {artist.genre}
                    </p>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated dots */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: artist.delay }}
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 sm:mt-20 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-electric-purple/50" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Disc3 className="w-8 h-8 text-electric-purple/50" />
          </motion.div>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-electric-purple/50" />
        </motion.div>
      </div>
    </section>
  )
}


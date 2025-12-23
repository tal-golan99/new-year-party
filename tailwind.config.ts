import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0a0a0f',
        'deep-purple': '#1a0a2e',
        'electric-purple': '#8b5cf6',
        'neon-purple': '#a855f7',
        'royal-purple': '#7c3aed',
        'gold': '#fbbf24',
        'champagne': '#f5deb3',
        'soft-gold': '#d4af37',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-glow-gold': 'pulse-glow-gold 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5), 0 0 90px rgba(139, 92, 246, 0.3)' 
          },
        },
        'pulse-glow-gold': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(251, 191, 36, 0.8), 0 0 60px rgba(251, 191, 36, 0.5), 0 0 90px rgba(251, 191, 36, 0.3)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'sparkle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config


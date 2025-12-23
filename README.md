# New Year's Eve Student Party 2025

A modern, high-end landing page for a New Year's Eve party built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dark Nightclub Aesthetic** - Deep blacks, vibrant purples, and gold accents
- **Live Countdown Timer** - Real-time countdown to the event
- **Smooth Animations** - Hardware-accelerated animations with Framer Motion
- **Mobile-Optimized** - Enhanced performance and UX for mobile devices
  - Dynamic viewport height handling for iOS Safari
  - Hardware-accelerated transforms and opacity
  - Reduced motion support for accessibility
  - Fixed scroll glitches and viewport issues
  - Optimized typography for mobile readability
- **Glowing CTAs** - Eye-catching ticket buttons with pulsing glow effects
- **Performance Optimized** - Using will-change, translateZ, and proper z-index stacking

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles & custom animations
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Hero.tsx         # Hero section with title & countdown
│   ├── Countdown.tsx    # Live countdown timer
│   ├── Info.tsx         # Event details (time, location)
│   ├── Lineup.tsx       # DJ & photographer lineup
│   └── Footer.tsx       # Footer with final CTA
├── tailwind.config.ts   # Custom theme colors & animations
└── package.json         # Dependencies
```

## Color Palette

- **Midnight**: `#0a0a0f` - Primary background
- **Deep Purple**: `#1a0a2e` - Secondary background
- **Electric Purple**: `#8b5cf6` - Primary accent
- **Gold**: `#fbbf24` - Highlight accent
- **Champagne**: `#f5deb3` - Soft gold variant

## Event Details

- **Event**: NEW YEARS EVE STUDENT PARTY
- **Date**: December 31st, 2025
- **Time**: 21:00
- **Location**: TCHERNICHOVSKY 10
- **Tickets**: [Get-In](https://get-in.com/en/412012?seller_code=getin)

## Built With

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) - Hardware-accelerated animations
- [Lucide React](https://lucide.dev/) - Icons

## Mobile Optimizations

This landing page has been extensively optimized for mobile devices:

- **Viewport Handling**: Uses dynamic viewport units (dvh) and -webkit-fill-available for iOS Safari
- **Smooth Scrolling**: Optimized parallax effects with reduced motion support
- **Hardware Acceleration**: All animations use transform and opacity with proper will-change hints
- **Z-Index Management**: Clean stacking contexts prevent element overlays
- **Typography**: Mobile-first font sizes (18px+ for readability)
- **Performance**: Reduced backdrop-filter blur on mobile, optimized particle animations

## License

This project is for event promotion purposes.

---

**See you at the party!**


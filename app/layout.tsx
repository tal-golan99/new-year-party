import type { Metadata } from 'next'
import './globals.css'
import ParticleBackground from '@/components/ParticleBackground'

export const metadata: Metadata = {
  title: 'NEW YEARS EVE STUDENT PARTY 2025',
  description: 'Join us for the ultimate New Year\'s Eve celebration! Live DJs, great vibes, and unforgettable memories.',
  openGraph: {
    title: 'NEW YEARS EVE STUDENT PARTY 2025',
    description: 'Join us for the ultimate New Year\'s Eve celebration!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" />
        <ParticleBackground />
        {children}
      </body>
    </html>
  )
}


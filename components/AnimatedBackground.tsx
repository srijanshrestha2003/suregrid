'use client'

import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  gridBackground?: string
}

export function AnimatedBackground({ gridBackground }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-white">
      {/* White to Light Blue Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #fafbfc 25%, #f0f9ff 50%, #e0f2fe 75%, #dbeafe 100%)'
        }}
      />
      
      {/* Grid Pattern - Fades in from top to bottom, more visible in blue area */}
      <div 
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)',
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          backgroundPosition: '0 0'
        }}
      />
    </div>
  )
}

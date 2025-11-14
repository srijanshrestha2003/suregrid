'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  CreditCard, 
  Banknote, 
  TrendingUp, 
  ShoppingCart,
  Zap,
  Shield,
  Globe
} from 'lucide-react'

interface Logo {
  src: string
  alt: string
}

interface AutoLogoSliderProps {
  logos: Logo[]
}

export function AutoLogoSlider({ logos }: AutoLogoSliderProps) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const duplicatedLogos = [...logos, ...logos]

  useEffect(() => {
    setMounted(true)

    // Check system preference and watch for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Use a safe default that matches server render
  const safeIsDark = mounted ? isDark : false

  return (
    <div className="relative w-full overflow-hidden py-8 md:py-12" suppressHydrationWarning>
      {/* Grid Background */}
      <div 
        className={`absolute inset-0 opacity-[0.03] dark:opacity-[0.05] ${
          safeIsDark ? 'bg-white' : 'bg-gray-900'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(${safeIsDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${safeIsDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Icons Background */}
      <FloatingIcons isDark={safeIsDark} />

      {/* Logo Slider Container */}
      <div className="relative z-10" suppressHydrationWarning>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -50 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
          style={{ width: '200%' }}
        >
          {duplicatedLogos.map((logo, index) => (
            <LogoCard 
              key={`${logo.src}-${index}`} 
              logo={logo} 
              index={index}
              isDark={safeIsDark}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function FloatingIcons({ isDark }: { isDark: boolean }) {
  const icons = [
    { Icon: Building2, delay: 0, x: '10%', y: '20%' },
    { Icon: CreditCard, delay: 0.5, x: '85%', y: '15%' },
    { Icon: Banknote, delay: 1, x: '20%', y: '80%' },
    { Icon: TrendingUp, delay: 1.5, x: '75%', y: '75%' },
    { Icon: ShoppingCart, delay: 2, x: '50%', y: '10%' },
    { Icon: Zap, delay: 2.5, x: '15%', y: '50%' },
    { Icon: Shield, delay: 3, x: '90%', y: '60%' },
    { Icon: Globe, delay: 3.5, x: '45%', y: '85%' },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className={`absolute ${
            isDark 
              ? 'text-white/5' 
              : 'text-gray-900/5'
          }`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1.2, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: delay,
            ease: 'easeInOut',
          }}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
      ))}
    </div>
  )
}

function LogoCard({ logo, index, isDark }: { logo: Logo; index: number; isDark: boolean }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [imageSrc, setImageSrc] = useState(logo.src)

  // Mark as mounted after hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Preload image immediately when component mounts
  useEffect(() => {
    if (!mounted) return
    
    // Preload using native HTMLImageElement
    const img = document.createElement('img')
    img.src = imageSrc
    img.onload = () => {
      setImageLoaded(true)
      setImageError(false)
    }
    img.onerror = () => {
      // Try encoded version if original fails
      if (imageSrc === logo.src && imageSrc.includes(' ')) {
        const encoded = logo.src.split('/').map(part => 
          part === '' ? '' : encodeURIComponent(part)
        ).join('/')
        if (encoded !== logo.src) {
          setImageSrc(encoded)
          return
        }
      }
      console.warn(`Failed to preload logo: ${logo.alt} from ${imageSrc}`)
      setImageError(true)
    }
  }, [imageSrc, logo.src, logo.alt, mounted])

  return (
    <motion.div
      className="flex items-center justify-center mx-6 md:mx-8 flex-shrink-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 8) * 0.05 }}
    >
      {/* Plain Logo - No Card */}
      <div className="relative w-[120px] md:w-[150px] h-[60px] md:h-[80px] flex items-center justify-center" suppressHydrationWarning>
        {!imageError ? (
          <>
            {!imageLoaded && mounted && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className={`w-6 h-6 border-2 ${
                    isDark
                      ? 'border-white/20 border-t-white/50'
                      : 'border-gray-300 border-t-gray-500'
                  } rounded-full`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            )}
            {mounted ? (
              <img
                src={imageSrc}
                alt={logo.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-200 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                style={{
                  maxWidth: '120px',
                  maxHeight: '60px',
                  width: 'auto',
                  height: 'auto',
                  opacity: imageLoaded ? 0.7 : 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: imageLoaded ? 'block' : 'none',
                }}
                loading={index < 8 ? 'eager' : 'lazy'}
                onLoad={() => {
                  setImageLoaded(true)
                  setImageError(false)
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  console.error(`Image failed to load: ${logo.alt}`, {
                    original: logo.src,
                    attempted: imageSrc
                  })
                  
                  // Try encoded version if not already encoded
                  if (imageSrc === logo.src && logo.src.includes(' ')) {
                    const encoded = logo.src.split('/').map(part => 
                      part === '' ? '' : encodeURIComponent(part)
                    ).join('/')
                    if (encoded !== logo.src) {
                      setImageSrc(encoded)
                      return
                    }
                  }
                  
                  setImageError(true)
                  setImageLoaded(false)
                }}
              />
            ) : (
              // Placeholder during SSR to prevent layout shift
              <div className="w-[120px] h-[60px]" aria-hidden="true" />
            )}
          </>
        ) : (
          <motion.div
            className={`text-xs font-semibold text-center px-3 py-2 rounded-lg ${
              isDark
                ? 'text-white/40'
                : 'text-gray-500'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {logo.alt}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

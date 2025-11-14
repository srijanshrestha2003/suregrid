'use client'

import { motion } from 'framer-motion'
import { ReactNode, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

interface AnimatedButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  fullWidth?: boolean
}

export function AnimatedButton({ 
  children, 
  variant = 'primary',
  href,
  fullWidth,
  className = '',
  ...props 
}: AnimatedButtonProps) {
  const baseClasses = fullWidth ? 'w-full' : ''
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'px-8 py-4 text-slate-300 hover:text-white font-medium rounded-xl transition-colors'
  }

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`${variants[variant]} ${baseClasses} ${className} inline-flex items-center justify-center gap-2`}
      {...props}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'violet' | 'blue' | 'emerald' | 'pink' | 'amber'
}

export function AnimatedCard({ children, className = '', glowColor = 'violet' }: AnimatedCardProps) {
  const glowColors = {
    violet: 'hover:shadow-violet-500/20',
    blue: 'hover:shadow-blue-500/20',
    emerald: 'hover:shadow-emerald-500/20',
    pink: 'hover:shadow-pink-500/20',
    amber: 'hover:shadow-amber-500/20'
  }

  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      className={`card-soft ${glowColors[glowColor]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface HoverScaleProps {
  children: ReactNode
  scale?: number
  className?: string
}

export function HoverScale({ children, scale = 1.05, className = '' }: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export function FloatingElement({ children, delay = 0, duration = 3 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      {children}
    </motion.div>
  )
}

interface GlowingTextProps {
  children: ReactNode
  className?: string
}

export function GlowingText({ children, className = '' }: GlowingTextProps) {
  return (
    <motion.span
      animate={{
        textShadow: [
          '0 0 20px rgba(184, 160, 255, 0.5)',
          '0 0 40px rgba(184, 160, 255, 0.8)',
          '0 0 20px rgba(184, 160, 255, 0.5)',
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.span>
  )
}


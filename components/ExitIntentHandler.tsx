'use client'

import { useEffect, useRef } from 'react'
import { useContactModal } from '@/contexts/ContactModalContext'

export function ExitIntentHandler() {
  const { openModal } = useContactModal()
  const hasShownExitIntent = useRef(false)
  const mouseYRef = useRef(0)

  useEffect(() => {
    // Track mouse movement to detect upward movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseYRef.current = e.clientY
    }

    // Exit intent detection - when mouse leaves viewport at the top
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving towards the top of the page (leaving the viewport)
      // Check if mouse Y is at or near the top (within 5px)
      if (e.clientY <= 5 && !hasShownExitIntent.current) {
        hasShownExitIntent.current = true
        openModal()
      }
    }

    // Detect when user tries to close tab/window
    // Note: Modern browsers (Chrome, Firefox, Safari) prevent showing modals in beforeunload
    // But we can still try to show it before the page unloads
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShownExitIntent.current) {
        // Try to show modal - though browsers may block this
        // We'll rely more on mouseleave which is more reliable
        hasShownExitIntent.current = true
        // The modal might not show due to browser restrictions, but we try
        openModal()
      }
    }

    // Detect when user moves mouse to top area (where close button is)
    // This is more reliable than beforeunload
    const handleMouseOut = (e: MouseEvent) => {
      // Check if mouse is leaving towards the top
      if (e.clientY <= 0 && !hasShownExitIntent.current) {
        hasShownExitIntent.current = true
        openModal()
      }
    }

    // Also detect when user presses back button (mobile)
    const handlePopState = () => {
      if (!hasShownExitIntent.current) {
        hasShownExitIntent.current = true
        openModal()
        // Push state back to prevent navigation
        window.history.pushState(null, '', window.location.href)
      }
    }

    // Push a state to detect back button
    window.history.pushState(null, '', window.location.href)

    // Add event listeners with different strategies
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [openModal])

  return null
}


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useContactModal } from '@/contexts/ContactModalContext'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { openModal } = useContactModal()

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openModal()
    setIsOpen(false) // Close mobile menu if open
  }
  const [showProducts, setShowProducts] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 group-hover:scale-105 transition-transform">
              <Image
                src="/surepass-logo.png"
                alt="Suregrid"
                width={44}
                height={44}
                className="relative rounded-xl shadow-sm"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Suregrid
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${showProducts ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-80 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
                  >
                    <div className="p-2">
                      <Link 
                        href="/products/surecomply" 
                        className="group flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all"
                      >
                        <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform p-1.5">
                          <Image src="/SureComply.png" alt="SureComply" width={24} height={24} className="object-contain" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">
                            SureComply
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            GRC automation for ISO 27001, SOC 2
                          </p>
                        </div>
                      </Link>
                      
                      <Link 
                        href="/products/surepilot" 
                        className="group flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all"
                      >
                        <div className="w-11 h-11 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform p-1.5">
                          <Image src="/SurePilot.png" alt="SurePilot" width={24} height={24} className="object-contain" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                            SurePilot
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            AI answers security questionnaires
                          </p>
                        </div>
                      </Link>
                      
                      <Link 
                        href="/products/surehunt" 
                        className="group flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all"
                      >
                        <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform p-1.5">
                          <Image src="/SureHunt.png" alt="SureHunt" width={24} height={24} className="object-contain" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-1">
                            SureHunt
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            AI agent-based pentest platform
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Login
            </Link>
            <button 
              onClick={handleDemoClick}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Request A Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-900 hover:text-gray-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-6 border-t border-gray-200">
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wide px-2 font-medium">Products</p>
                  <Link href="/products/surecomply" className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
                    SureComply
                  </Link>
                  <Link href="/products/surepilot" className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
                    SurePilot
                  </Link>
                  <Link href="/products/surehunt" className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
                    SureHunt
                  </Link>
                </div>
                <Link href="/pricing" className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
                  Pricing
                </Link>
                <Link href="/about" className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
                  About
                </Link>
                <Link href="/contact" className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
                  Contact
                </Link>
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <Link href="/login" className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
                    Login
                  </Link>
                  <button 
                    onClick={handleDemoClick}
                    className="block w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-center shadow-md"
                  >
                    Request A Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

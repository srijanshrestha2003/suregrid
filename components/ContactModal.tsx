'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add API call here
    closeModal()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal - Smaller size */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden pointer-events-auto flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Left Panel - Light Background matching theme */}
              <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 p-6 lg:p-8 flex flex-col justify-between lg:w-2/5">
                <div>
                  {/* Envelope Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-8 h-8 text-indigo-600" />
                    </div>
                  </div>

                  {/* Main Message */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
                    Our Representative will get in touch with you for further process.
                  </h3>

                  {/* Secondary Message */}
                  <p className="text-gray-600 mb-6 text-sm text-center lg:text-left">
                    Stay updated with all latest updates & much more.
                  </p>

                  {/* Contact Email */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                    <Mail className="w-4 h-4 text-indigo-600" />
                    <a 
                      href="mailto:contact@surepass.in" 
                      className="text-gray-900 font-medium hover:text-indigo-600 transition-colors text-sm"
                    >
                      contact@surepass.in
                    </a>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-sm text-gray-500 text-center lg:text-left">
                  *Terms and conditions apply.
                </p>
              </div>

              {/* Right Panel - Dark Background matching theme */}
              <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 lg:p-8 flex-1 flex flex-col">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  Contact Us
                </h2>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="space-y-6 flex-1">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                        Your Name (required)
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                        Your Email (required)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* Mobile Field */}
                    <div>
                      <label htmlFor="mobile" className="block text-white text-sm font-medium mb-2">
                        Mobile Number (required)
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        placeholder="Enter your mobile number"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                        What are you looking to accomplish?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm"
                        placeholder="Tell us about your requirements"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 hover:from-indigo-500 hover:via-blue-500 hover:to-violet-500 text-white font-semibold rounded-lg transition-all shadow-lg"
                    >
                      Submit
                    </button>
                  </div>

                  {/* Privacy Statement */}
                  <p className="text-sm text-gray-400 text-center mt-6">
                    We respect your privacy.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}


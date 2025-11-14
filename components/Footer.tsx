'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-11 h-11">
                <Image
                  src="/surepass-logo.png"
                  alt="Suregrid"
                  width={44}
                  height={44}
                  className="relative rounded-xl shadow-sm"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">Suregrid</span>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Automated trust infrastructure for modern fintechs. Unify compliance, security, and penetration testing with AI.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/company/suregrid" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white hover:bg-gray-100 border border-gray-200 hover:border-indigo-300 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/suregrid" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white hover:bg-gray-100 border border-gray-200 hover:border-indigo-300 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all shadow-sm"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/suregrid" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white hover:bg-gray-100 border border-gray-200 hover:border-indigo-300 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <div className="flex flex-col gap-3">
              <Link href="/products/surecomply" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm flex items-center gap-1 group">
                <span>SureComply</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/products/surepilot" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm flex items-center gap-1 group">
                <span>SurePilot</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/products/surehunt" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm flex items-center gap-1 group">
                <span>SureHunt</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                About
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                Contact
              </Link>
              <Link href="/careers" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                Careers
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <div className="flex flex-col gap-3">
              <Link href="/docs" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                Documentation
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                Blog
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                Support
              </Link>
              <Link href="/security" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                Security
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Suregrid. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

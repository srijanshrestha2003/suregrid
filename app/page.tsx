'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle
} from 'lucide-react'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { AutoLogoSlider } from '@/components/AutoLogoSlider'
import { useContactModal } from '@/contexts/ContactModalContext'

export default function HomePage() {
  const { openModal } = useContactModal()

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openModal()
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Top Border with Shadow */}
      <div className="border-t border-gray-200 shadow-md"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              <span className="text-gray-800">
                Build Trust Faster
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600">
                Stay Compliant Effortlessly
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              One platform that handles your <span className="text-indigo-600 font-semibold">compliance</span>, 
              <span className="text-blue-600 font-semibold"> security</span>, and 
              <span className="text-violet-600 font-semibold"> testing</span>—so you can focus on building great products.
            </motion.p>
            
            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              onSubmit={(e) => {
                e.preventDefault()
                handleDemoClick(e as any)
              }}
              className="flex flex-col sm:flex-row gap-2 justify-center mb-16 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter Your Work Email"
                required
                className="flex-1 px-4 py-2.5 text-sm border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 text-gray-900 placeholder-gray-400 bg-white/90 backdrop-blur-sm shadow-sm"
              />
              <button 
                type="submit"
                className="px-6 py-2.5 text-sm bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 hover:from-indigo-400 hover:via-blue-400 hover:to-violet-400 text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md whitespace-nowrap border border-indigo-300/50"
              >
                Request A Demo
              </button>
            </motion.form>
            
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gray-500" />
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gray-500" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gray-500" />
                <span>GDPR Ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="py-16 bg-gradient-to-b from-blue-50/30 to-blue-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-12 text-center"
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <AutoLogoSlider
            logos={[
              { src: '/HDFCBank-logo.png', alt: 'HDFC Bank' },
              { src: '/IDFC First Bank.png', alt: 'IDFC First Bank' },
              { src: '/bandhanbank-logo.png', alt: 'Bandhan Bank' },
              { src: '/Paytm-logo.png', alt: 'Paytm' },
              { src: '/J&K Bank-logo.png', alt: 'J&K Bank' },
              { src: '/BankofBaroda-logo.png', alt: 'Bank of Baroda' },
              { src: '/airtelpayments bank-logo.png', alt: 'Airtel Payments Bank' },
              { src: '/HDFC Life-logo.png', alt: 'HDFC Life' },
              { src: '/zomato.png', alt: 'Zomato' },
              { src: '/Uber-logo.png', alt: 'Uber' },
              { src: '/Amazon-logo.png', alt: 'Amazon' },
              { src: '/KPMG-logo.png', alt: 'KPMG' },
              { src: '/slicepay.png', alt: 'Slice' },
              { src: '/CARS24-logo.svg', alt: 'Cars24' },
              { src: '/Tata Motors-logo.png', alt: 'Tata Motors' },
              { src: '/Sidbi-logo.png', alt: 'SIDBI' },
            ]}
          />
        </div>
      </section>

      {/* Product Cards Section */}
      <section id="products" className="section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Suregrid Suite
            </h2>
            <p className="text-xl text-gray-600">
              Three powerful products, one unified platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* SureComply Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group card-light hover-lift p-8 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-2">
                <Image src="/SureComply.png" alt="SureComply" width={32} height={32} className="object-contain" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                SureComply
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                GRC automation for ISO 27001, SOC 2, and more. Continuous compliance monitoring with audit-ready evidence.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Automated control mapping</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Real-time compliance dashboards</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Instant audit evidence collection</span>
                </li>
              </ul>
              
              <Link 
                href="/products/surecomply"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* SurePilot Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group card-light hover-lift p-8 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-2">
                <Image src="/SurePilot.png" alt="SurePilot" width={32} height={32} className="object-contain" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                SurePilot
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI that answers security questionnaires for you. Complete RFPs and vendor assessments 90% faster.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>AI-powered auto-responses</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>90% faster completion time</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Knowledge base integration</span>
                </li>
              </ul>
              
              <Link 
                href="/products/surepilot"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* SureHunt Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group card-light hover-lift p-8 hover:border-amber-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-2">
                <Image src="/SureHunt.png" alt="SureHunt" width={32} height={32} className="object-contain" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                SureHunt
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI agent-based pentest platform. Continuous vulnerability scanning with intelligent remediation guidance.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Autonomous agent scanning</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>CVSS scoring & prioritization</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>AI-driven fix suggestions</span>
                </li>
              </ul>
              
              <Link 
                href="/products/surehunt"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Highlights */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Integrates with Your Stack
            </h2>
            <p className="text-xl text-gray-600">
              Seamlessly connect with the tools you already use
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
              { name: 'Google Cloud', logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
              { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
              { name: 'GitHub', logo: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' },
              { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
              { name: 'Jira', logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
              { name: 'Confluence', logo: 'https://cdn.worldvectorlogo.com/logos/confluence-1.svg' },
              { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
              { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
              { name: 'Terraform', logo: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' },
              { name: 'Jenkins', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg' },
              { name: 'GitLab', logo: 'https://about.gitlab.com/images/press/logo/svg/gitlab-logo-500.svg' },
            ].map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 relative flex items-center justify-center">
                  <Image 
                    src={integration.logo} 
                    alt={integration.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <span className="text-sm text-gray-700 font-medium">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-light">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-3xl p-12 lg:p-16 text-center shadow-xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Trust Infrastructure?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join modern fintechs using Suregrid to stay compliant, secure, and audited.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDemoClick}
                className="px-8 py-4 bg-white text-indigo-600 hover:bg-gray-50 font-semibold rounded-xl transition shadow-lg"
              >
                Schedule Demo
              </button>
              <Link 
                href="/pricing" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl transition"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

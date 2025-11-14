'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'

export default function PricingPage() {
  const { openModal } = useContactModal()

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openModal()
  }
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-light p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for startups getting started</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$999</span>
                <span className="text-gray-600">/month</span>
              </div>
              
              <button 
                onClick={handleDemoClick}
                className="btn-secondary block text-center mb-8 w-full"
              >
                Get Started
              </button>
              
              <ul className="space-y-4">
                {[
                  'SureComply: 1 framework',
                  'SurePilot: 50 questionnaires/month',
                  'SureHunt: Basic scans',
                  'Up to 5 team members',
                  'Email support',
                  'API access',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-2xl p-8 shadow-2xl scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-sm font-semibold text-white">
                Most Popular
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-indigo-100 mb-6">For growing companies</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$2,999</span>
                <span className="text-indigo-100">/month</span>
              </div>
              
              <button 
                onClick={handleDemoClick}
                className="block w-full px-6 py-3 bg-white text-indigo-600 hover:bg-gray-50 font-semibold rounded-xl transition text-center mb-8 shadow-md"
              >
                Get Started
              </button>
              
              <ul className="space-y-4">
                {[
                  'SureComply: 5 frameworks',
                  'SurePilot: Unlimited questionnaires',
                  'SureHunt: Advanced scans + CI/CD',
                  'Up to 20 team members',
                  'Priority support',
                  'Advanced API access',
                  'Custom integrations',
                  'Dedicated CSM',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-indigo-50">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-light p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large organizations</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>
              
              <Link 
                href="/contact" 
                className="btn-primary block text-center mb-8"
              >
                Contact Sales
              </Link>
              
              <ul className="space-y-4">
                {[
                  'All frameworks unlimited',
                  'Unlimited everything',
                  'On-premise deployment option',
                  'Unlimited team members',
                  '24/7 white-glove support',
                  'Custom API solutions',
                  'Custom integrations',
                  'Dedicated solutions architect',
                  'SLA guarantees',
                  'Custom training',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: 'Can I try Suregrid before purchasing?',
                answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, ACH transfers, and wire transfers for annual subscriptions.'
              },
              {
                question: 'Can I upgrade or downgrade my plan?',
                answer: 'Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle.'
              },
              {
                question: 'Do you offer annual discounts?',
                answer: 'Yes, save 20% when you pay annually instead of monthly.'
              },
              {
                question: 'Is my data secure?',
                answer: 'Yes. We are SOC 2 Type II and ISO 27001 certified. All data is encrypted at rest and in transit.'
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-3xl p-12 lg:p-16 text-center shadow-xl"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join hundreds of companies using Suregrid
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDemoClick}
                className="group px-8 py-4 bg-white text-indigo-600 hover:bg-gray-50 font-semibold rounded-xl transition shadow-lg flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl transition"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

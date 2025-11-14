'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FileCheck, CheckCircle, ArrowRight, BarChart3, Clock, Users, Lock, AlertCircle } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'

export default function SureComplyPage() {
  const { openModal } = useContactModal()

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openModal()
  }
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-blue-50/30 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-sm font-medium mb-6"
            >
              <Image src="/SureComply.png" alt="SureComply" width={16} height={16} className="object-contain" />
              <span className="text-emerald-600">GRC Automation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900"
            >
              SureComply
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Automated GRC platform for ISO 27001, SOC 2, GDPR, and more. Stay audit-ready with continuous compliance monitoring.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={handleDemoClick}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 hover:from-indigo-500 hover:via-blue-500 hover:to-violet-500 text-white font-semibold rounded-lg transition shadow-lg flex items-center justify-center gap-2"
              >
                Get Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                href="#features" 
                className="px-8 py-4 bg-white border-2 border-gray-300 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 font-semibold rounded-lg transition"
              >
                See Features
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Automated workflows that save you months of manual work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileCheck,
                title: 'Automated Control Mapping',
                description: 'Map your controls to ISO 27001, SOC 2, GDPR, and 40+ frameworks automatically.',
                color: 'indigo'
              },
              {
                icon: BarChart3,
                title: 'Real-Time Dashboards',
                description: 'Track compliance status across all frameworks with live dashboards and reports.',
                color: 'violet'
              },
              {
                icon: Clock,
                title: 'Continuous Monitoring',
                description: '24/7 automated evidence collection from your cloud infrastructure and tools.',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Audit Collaboration',
                description: 'Share audit-ready evidence with auditors and stakeholders in real-time.',
                color: 'indigo'
              },
              {
                icon: Lock,
                title: 'Policy Management',
                description: 'Create, version, and manage security policies with built-in templates.',
                color: 'violet'
              },
              {
                icon: AlertCircle,
                title: 'Risk Assessment',
                description: 'Identify, prioritize, and remediate risks with AI-powered insights.',
                color: 'blue'
              },
            ].map((feature, index) => {
              const colorClasses = {
                indigo: 'bg-indigo-100 text-indigo-600',
                violet: 'bg-violet-100 text-violet-600',
                blue: 'bg-blue-100 text-blue-600'
              }
              const colorClass = colorClasses[feature.color as keyof typeof colorClasses] || colorClasses.indigo
              const [bgClass, textClass] = colorClass.split(' ')
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group card-light p-8"
                >
                  <div className={`w-12 h-12 ${bgClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${textClass}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Support for 40+ Frameworks
            </h2>
            <p className="text-xl text-gray-600">
              One platform for all your compliance needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'ISO 27001',
              'SOC 2 Type II',
              'GDPR',
              'HIPAA',
              'PCI DSS',
              'NIST CSF',
              'ISO 27017',
              'ISO 27018',
            ].map((framework, index) => (
              <motion.div
                key={framework}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-all text-center"
              >
                <CheckCircle className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <p className="text-gray-900 font-semibold">{framework}</p>
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
              Get Audit-Ready in Weeks, Not Months
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Start your compliance journey with SureComply today
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


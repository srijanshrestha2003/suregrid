'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Target, Users, Zap, Heart, ArrowRight, Shield, Rocket, Lock, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-blue-50/30 to-blue-50/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Building Trust Infrastructure
            <br />
            <span className="text-gradient">for Modern Companies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Suregrid is on a mission to automate the complex world of compliance, security questionnaires, and penetration testing so companies can focus on building great products.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-light p-10 hover:border-indigo-300"
            >
              <Target className="w-12 h-12 text-indigo-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We believe security and compliance shouldn&apos;t slow down innovation. Our mission is to automate trust infrastructure so every company can be secure, compliant, and trusted by default—without the manual overhead.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-light p-10 hover:border-violet-300"
            >
              <Zap className="w-12 h-12 text-violet-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A world where trust is automated, transparent, and accessible to all. Where companies spend their time building, not filling out questionnaires or chasing audit evidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              Principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                iconColor: 'text-indigo-600',
                bgColor: 'bg-indigo-100',
                title: 'Customer First',
                description: 'Every decision starts with our customers. We build what they need, not what we want to build.'
              },
              {
                icon: Rocket,
                iconColor: 'text-violet-600',
                bgColor: 'bg-violet-100',
                title: 'Move Fast',
                description: 'Speed is a feature. We ship quickly, iterate rapidly, and learn constantly.'
              },
              {
                icon: Shield,
                iconColor: 'text-emerald-600',
                bgColor: 'bg-emerald-100',
                title: 'Security by Default',
                description: 'We practice what we preach. Security is not an afterthought—it is our foundation.'
              },
              {
                icon: Lightbulb,
                iconColor: 'text-amber-600',
                bgColor: 'bg-amber-100',
                title: 'Radical Transparency',
                description: 'Open communication, honest feedback, and clear documentation in everything.'
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all text-center group"
              >
                <div className={`w-16 h-16 ${value.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-3xl p-12 lg:p-16 text-center shadow-xl"
          >
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Us on Our Mission
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              We&apos;re always looking for talented people who want to change how companies think about trust and security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/careers" 
                className="group px-8 py-4 bg-white text-indigo-600 hover:bg-gray-50 font-semibold rounded-xl transition shadow-lg flex items-center justify-center gap-2"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl transition"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

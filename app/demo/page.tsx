'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Video, Users } from 'lucide-react'

export default function DemoPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            See Suregrid in Action
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            Schedule a personalized demo with our team and discover how Suregrid can transform your security operations
          </motion.p>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Video,
                title: 'Live Product Tour',
                description: 'See all three products in action with real-world examples'
              },
              {
                icon: Users,
                title: 'Custom Use Cases',
                description: 'We will tailor the demo to your specific needs and industry'
              },
              {
                icon: Calendar,
                title: 'Q&A Session',
                description: 'Get all your questions answered by our product experts'
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form & Info */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-10 border border-white/10"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Demo</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="workEmail" className="block text-sm font-medium text-slate-300 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-slate-300 mb-2">
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="interested" className="block text-sm font-medium text-slate-300 mb-2">
                    I&apos;m interested in
                  </label>
                  <select
                    id="interested"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  >
                    <option value="">Select product(s)</option>
                    <option value="all">All Products</option>
                    <option value="surecomply">SureComply (GRC)</option>
                    <option value="surepilot">SurePilot (Security Questionnaires)</option>
                    <option value="surehunt">SureHunt (Pentesting)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg transition shadow-lg shadow-indigo-500/25"
                >
                  Schedule Demo
                </button>
                
                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our Privacy Policy
                </p>
              </form>
            </motion.div>

            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What to Expect</h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Our demo sessions are designed to give you a comprehensive understanding of how Suregrid can help your organization.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'Discovery (5 min)',
                    description: 'We will learn about your current challenges and compliance goals'
                  },
                  {
                    title: 'Product Walkthrough (20 min)',
                    description: 'See SureComply, SurePilot, and SureHunt in action with live demos'
                  },
                  {
                    title: 'Custom Use Cases (10 min)',
                    description: 'We will show how Suregrid solves your specific pain points'
                  },
                  {
                    title: 'Q&A & Next Steps (10 min)',
                    description: 'Ask questions and discuss implementation, pricing, and timelines'
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-white/10"
                  >
                    <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-400 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Demo Guarantee</h3>
                <ul className="space-y-3">
                  {[
                    'No sales pressure - just education',
                    'Customized to your industry',
                    'Technical deep-dive available',
                    'Recording provided after demo'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-green-50">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Trusted by Security Teams Worldwide
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Join hundreds of companies that have transformed their trust infrastructure with Suregrid
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-slate-500">Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-slate-500">Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">95%</div>
              <div className="text-slate-500">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-slate-500">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


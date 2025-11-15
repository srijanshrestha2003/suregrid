'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Users,
  FileText,
  Zap,
  Shield,
  BarChart3,
  Upload,
  MessageSquare,
  Database,
  Brain,
  Target,
  TrendingUp,
  Award,
  AlertCircle,
  Check,
  X,
  Building2,
  Rocket,
  Lock
} from 'lucide-react'
import { useState } from 'react'
import { useContactModal } from '@/contexts/ContactModalContext'

export default function SurePilotPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const { openModal } = useContactModal()

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openModal()
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* HERO SECTION */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-blue-50/30 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight leading-snug lg:leading-snug mb-8 lg:mb-10 px-4"
            >
              <span className="text-gray-900">
                Complete compliance questionnaires in{' '}
              </span>
              <span className="text-gradient">
                hours, not weeks
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 leading-relaxed px-4 lg:px-6"
            >
              Surepilot automates vendor security assessments and compliance questionnaires with AI 
              that understands your verification infrastructure. Built for fast-moving teams who can&apos;t afford 
              compliance bottlenecks.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button 
                onClick={handleDemoClick}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 hover:from-indigo-500 hover:via-blue-500 hover:to-violet-500 text-white font-semibold rounded-lg transition shadow-lg flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-gray-600"
            >
              Trusted by <span className="text-indigo-600 font-semibold">3000+</span> verification-first companies across BFSI
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Your compliance team shouldn&apos;t be your{' '}
              <span className="text-red-600">sales bottleneck</span>
            </motion.h2>
          </div>
          
          {/* Three Problem Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-light p-8 hover:border-red-300"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Questionnaire Avalanche</h3>
              <p className="text-gray-600 leading-relaxed">
                Every new enterprise deal brings 50-200 security questions. Your team copies answers from old spreadsheets, 
                hoping nothing&apos;s outdated. Meanwhile, your prospect waits days for basic compliance information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-light p-8 hover:border-orange-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verification Chaos</h3>
              <p className="text-gray-600 leading-relaxed">
                You&apos;re running 365+ verification APIs, but when RFPs ask about your security posture, data handling, 
                or compliance certifications, you&apos;re hunting through Slack threads and Google Drives for answers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-light p-8 hover:border-amber-300"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Repetition Without Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                You answer the same SOC 2, ISO 27001, and GDPR questions differently each time. 
                No single source of truth. No consistency. No way to leverage what you&apos;ve already answered.
              </p>
            </motion.div>
          </div>

          {/* Impact Metrics Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-red-600 mb-2">18 days</p>
                <p className="text-gray-600">Average time to complete vendor questionnaires</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-orange-600 mb-2">67%</p>
                <p className="text-gray-600">Of deals delayed due to security reviews</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-amber-600 mb-2">45+ hours</p>
                <p className="text-gray-600">Per month wasted on repetitive compliance questions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION OVERVIEW SECTION */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              AI that knows your{' '}
              <span className="text-gradient">
                compliance DNA
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Surepilot builds an intelligent knowledge graph from your policies, certifications, past questionnaires, 
              and technical infrastructure—then deploys it instantly when questionnaires arrive.
            </motion.p>
          </div>
          
          {/* Four Core Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-light p-8 hover:border-indigo-300 group"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Upload className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Questionnaire Ingestion</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload any format: Excel, Word, PDF, or third-party portals. Surepilot parses, categorizes, 
                and maps every question to your existing knowledge base—automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-light p-8 hover:border-violet-300 group"
            >
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Auto-Complete</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI engine pre-fills 85%+ of questions with contextually accurate answers pulled from your 
                approved knowledge base, compliance documents, and previous responses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-light p-8 hover:border-emerald-300 group"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verification-Aware Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Built for companies running verification infrastructure. Surepilot understands KYC workflows, 
                API security, data residency, PII handling, and regulatory frameworks specific to BFSI and fintech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-light p-8 hover:border-pink-300 group"
            >
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Review & Approval</h3>
              <p className="text-gray-600 leading-relaxed">
                Route technical questions to engineering, compliance questions to legal, and product questions to PMs—all 
                within Surepilot. Track, comment, and approve before export.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Built for <span className="text-indigo-600">speed</span>. 
              Designed for <span className="text-emerald-600">accuracy</span>.
            </motion.h2>
          </div>
          
          {/* Feature Grid 2x3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-light p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Knowledge Base</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your single source of compliance truth. Surepilot automatically organizes policies, certifications 
                (ISO 27001, SOC 2, PCI DSS), API documentation, and past questionnaire responses into a searchable, 
                taggable knowledge graph.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span>Auto-syncs with your GRC tools</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span>Version control for policy updates</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span>Smart tagging by product, region, compliance framework</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span>Continuously learns from every questionnaire</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-light p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-indigo-400" />
                <h3 className="text-2xl font-bold text-gray-900">Context-Aware AI Responses</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Not just keyword matching. Surepilot&apos;s AI understands question intent, your business context, 
                and compliance nuances to generate accurate, well-cited answers.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-violet-600" />
                  <span>85-92% answer accuracy rate</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-violet-600" />
                  <span>Maintains your brand voice and tone</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-violet-600" />
                  <span>Cites source documents automatically</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-violet-600" />
                  <span>Flags high-risk or ambiguous questions for human review</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-light p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-emerald-400" />
                <h3 className="text-2xl font-bold text-gray-900">Multi-Format Support</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Meet your prospects wherever they are. Import from Excel, Word, Google Forms, PDF, or popular vendor portals. 
                Export in the original format with zero formatting loss.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Seamless Excel/Word round-tripping</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>PDF extraction with OCR</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Bulk import for efficiency</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-light p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-pink-400" />
                <h3 className="text-2xl font-bold text-gray-900">Smart Collaboration Engine</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bring the right experts into the right questions. Auto-assign by question category, track progress, 
                comment inline, and maintain approval workflows.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span>Slack/Teams notifications for assignments</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span>@mention teammates for quick clarifications</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span>Approval queues with audit trails</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span>Real-time collaborative editing</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card-light p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-gray-900">Industry-Specific Templates</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pre-built question libraries for BFSI, fintech, SaaS, and verification platforms. 
                Start with 500+ pre-approved answers tailored to your industry.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span>BFSI regulatory templates (RBI, SEBI, IRDAI)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span>Fintech-specific questionnaires (NPCI, UPI, BBPS)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span>KYC/AML compliance frameworks</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span>Data localization and PII handling templates</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="card-light p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-gray-900">Analytics & Insights</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Understand your compliance workload. Track questionnaire volume, response times, approval bottlenecks, 
                and most-asked questions to optimize your workflow.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Questionnaire velocity tracking</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Question frequency analysis</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Team performance metrics</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Deal acceleration insights</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="section-gray">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              From questionnaire to submission in{' '}
              <span className="text-indigo-600">3 steps</span>
            </motion.h2>
          </div>
          
          {/* Vertical Timeline */}
          <div className="space-y-12">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div className="w-1 h-full bg-gradient-to-b from-indigo-600 to-transparent mt-4" />
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Import & Parse</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Drop your questionnaire into Surepilot via upload, email forwarding, or API. Our AI instantly 
                  categorizes every question and maps it to relevant sections of your knowledge base.
                </p>
                <p className="text-emerald-600 font-semibold">⚡ Time saved: 2-3 hours of manual parsing</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <div className="w-1 h-full bg-gradient-to-b from-indigo-600 to-transparent mt-4" />
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Auto-Fill</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Surepilot pre-populates answers with 85%+ accuracy, citing source documents. Our verification-aware 
                  AI understands technical nuances like API rate limiting, encryption standards, and audit logging.
                </p>
                <p className="text-emerald-600 font-semibold">⚡ Time saved: 15-20 hours of research and writing</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Review, Refine & Export</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Your team reviews AI-generated answers, collaborates on edge cases, routes questions to SMEs, 
                  and approves final responses. Export in original format with one click.
                </p>
                <p className="text-emerald-600 font-semibold">⚡ Time saved: 5-7 hours of coordination and formatting</p>
              </div>
            </motion.div>
          </div>

          {/* Result Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-emerald-600 mb-2">4-6 hours</p>
                <p className="text-gray-600">Total Time (vs. 22-30 hours manually)</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-green-600 mb-2">94%+</p>
                <p className="text-gray-600">Accuracy with human-in-the-loop review</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Who uses Surepilot?
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Building2,
                title: 'Fintech & BFSI Companies',
                description: 'Digital lending platforms, payment gateways, neobanks, and verification infrastructure providers handling high-volume RFPs from enterprise clients and banks.',
                bgColor: 'bg-indigo-100',
                iconColor: 'text-indigo-600',
                borderColor: 'hover:border-indigo-300'
              },
              {
                icon: Shield,
                title: 'Compliance & Security Teams',
                description: 'GRC managers, CISOs, and compliance officers drowning in vendor security assessments, ISO 27001 audits, and SOC 2 questionnaires.',
                bgColor: 'bg-violet-100',
                iconColor: 'text-violet-600',
                borderColor: 'hover:border-violet-300'
              },
              {
                icon: TrendingUp,
                title: 'Sales & Partnership Teams',
                description: 'Sales engineers and BD teams who need rapid turnaround on security questionnaires to close enterprise deals faster.',
                bgColor: 'bg-emerald-100',
                iconColor: 'text-emerald-600',
                borderColor: 'hover:border-emerald-300'
              },
              {
                icon: Rocket,
                title: 'High-Growth Startups',
                description: 'Series A-C startups scaling into enterprise markets who don&apos;t have dedicated compliance teams but face increasing security review requirements.',
                bgColor: 'bg-pink-100',
                iconColor: 'text-pink-600',
                borderColor: 'hover:border-pink-300'
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-light p-8 ${useCase.borderColor} transition-all`}
              >
                <div className={`w-12 h-12 ${useCase.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <useCase.icon className={`w-6 h-6 ${useCase.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section-gray">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Surepilot vs. Traditional Approach
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left text-gray-600 font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-indigo-600 font-semibold">Surepilot</th>
                    <th className="px-6 py-4 text-center text-gray-600 font-semibold">Manual Process</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Time to complete 100-question RFP', surepilot: '4-6 hours', manual: '18-25 hours' },
                    { feature: 'Answer accuracy & consistency', surepilot: '85-92%', manual: '60-70%' },
                    { feature: 'Source citation', surepilot: 'Automatic', manual: 'Manual lookup' },
                    { feature: 'Knowledge base sync', surepilot: 'Real-time', manual: 'Outdated spreadsheets' },
                    { feature: 'Collaboration & routing', surepilot: 'Built-in workflows', manual: 'Email chaos' },
                    { feature: 'Version control', surepilot: 'Full audit trail', manual: 'Google Docs mess' },
                    { feature: 'Format flexibility', surepilot: 'Any format', manual: 'Copy-paste hell' },
                    { feature: 'Learning from history', surepilot: 'AI improves over time', manual: 'No institutional memory' },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-gray-700">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
                          <Check className="w-5 h-5" />
                          {row.surepilot}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-2 text-red-600">
                          <X className="w-5 h-5" />
                          {row.manual}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'How does Surepilot integrate with our existing tools?',
                answer: 'Surepilot integrates with popular GRC platforms (Vanta, Drata, Secureframe), documentation tools (Confluence, Notion, Google Drive), and communication platforms (Slack, Teams). We offer API access for custom integrations and can sync your compliance documents, policies, and certifications automatically.'
              },
              {
                question: 'Is our data secure with Surepilot?',
                answer: 'Yes. Surepilot is SOC 2 Type II certified and ISO 27001 compliant. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We never train our AI models on your proprietary data, and you maintain full ownership of all content. Role-based access controls and audit logs track every action.'
              },
              {
                question: 'What types of questionnaires does Surepilot support?',
                answer: 'Surepilot handles all vendor security assessments including: Standard RFPs (Excel, Word, PDF), Third-party portal questionnaires (OneTrust, Whistic, Security Scorecard), Custom compliance questionnaires (SOC 2, ISO 27001, GDPR, HIPAA), Industry-specific forms (BFSI, fintech, healthcare), and Due diligence questionnaires for M&A or funding rounds.'
              },
              {
                question: 'How accurate is the AI? Will it make mistakes?',
                answer: 'Our AI achieves 85-92% answer accuracy depending on your knowledge base completeness. We use a human-in-the-loop approach—AI suggests answers with confidence scores, and your team reviews before submission. High-risk or ambiguous questions are automatically flagged for manual review. Every answer includes source citations so you can verify accuracy.'
              },
              {
                question: 'How long does implementation take?',
                answer: 'Most teams are up and running within 2-3 days: Day 1: Upload your existing policies, certifications, past questionnaires. Day 2: AI builds your knowledge graph and you review suggested answers. Day 3: Upload your first live questionnaire and test the workflow. Our team provides hands-on onboarding and templates to accelerate setup.'
              },
              {
                question: 'Can Surepilot learn our company\'s specific terminology and voice?',
                answer: 'Absolutely. Surepilot learns your writing style, preferred terminology, and brand voice from your existing responses. You can also set approval workflows for certain question types and maintain a style guide within the platform. The more you use it, the better it understands your preferences.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-6 h-6 text-indigo-600 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
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
              Stop losing deals to slow compliance
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join 3000+ companies using Surepilot to answer questionnaires 5x faster
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDemoClick}
                className="group px-8 py-4 bg-white text-indigo-600 hover:bg-gray-50 font-semibold rounded-xl transition shadow-lg flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl transition"
              >
                Talk to Sales
              </Link>
            </div>
            <p className="text-sm text-indigo-100 mt-6">
              14-day free trial • No credit card required • Setup in 2 days
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
